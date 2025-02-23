import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { getMedicineSchedule } from './api';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const configurePushNotifications = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('medicine-reminders', {
      name: 'Medicine Reminders',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    throw new Error('Permission not granted for notifications');
  }
};

export const scheduleNotification = async (medicine) => {
  const { id, name, time } = medicine;
  const [hours, minutes] = time.split(':');

  // Calculate next occurrence of this time
  const scheduledTime = new Date();
  scheduledTime.setHours(parseInt(hours, 10));
  scheduledTime.setMinutes(parseInt(minutes, 10));
  scheduledTime.setSeconds(0);

  if (scheduledTime <= new Date()) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Medicine Reminder',
      body: `Time to take ${name}`,
      data: { medicineId: id },
      categoryIdentifier: 'medicine-reminder',
    },
    trigger: {
      date: scheduledTime,
      repeats: true,
    },
  });

  return notificationId;
};

export const setupMedicineReminders = async () => {
  try {
    // Cancel all existing notifications
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Get updated schedule from backend
    const schedule = await getMedicineSchedule();

    // Schedule new notifications for each medicine
    for (const medicine of schedule) {
      await scheduleNotification(medicine);
    }
  } catch (error) {
    console.error('Error setting up reminders:', error);
    throw error;
  }
};

export const handleNotificationResponse = async (response) => {
  const medicineId = response.notification.request.content.data.medicineId;
  const status = response.actionIdentifier === 'TAKEN' ? 'taken' : 'missed';

  try {
    // Update backend with medicine status
    await updateMedicineStatus(medicineId, status);
    
    // Refresh notifications with updated schedule
    await setupMedicineReminders();
  } catch (error) {
    console.error('Error handling notification response:', error);
  }
};