// // import React from 'react';
// // import { View, Text, StyleSheet, ScrollView } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';

// // export default function Home() {
// //   return (
// //     <ScrollView style={styles.container}>
// //       <LinearGradient
// //         colors={['#4c669f', '#3b5998', '#192f6a']}
// //         style={styles.header}
// //       >
// //         <Text style={styles.welcomeText}>Welcome to MedTrack</Text>
// //         <Text style={styles.subtitle}>Your Medicine Management Hub</Text>
// //       </LinearGradient>

// //       <View style={styles.content}>
// //         <View style={styles.card}>
// //           <Text style={styles.cardTitle}>Today's Schedule</Text>
// //           <Text style={styles.cardText}>You have 3 medications due today</Text>
// //         </View>

// //         <View style={styles.card}>
// //           <Text style={styles.cardTitle}>Inventory Status</Text>
// //           <Text style={styles.cardText}>2 medications need refill</Text>
// //         </View>

// //         <View style={styles.card}>
// //           <Text style={styles.cardTitle}>Next Appointment</Text>
// //           <Text style={styles.cardText}>Dr. Smith - March 15, 2024</Text>
// //         </View>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   header: {
// //     padding: 30,
// //     paddingTop: 60,
// //     borderBottomLeftRadius: 30,
// //     borderBottomRightRadius: 30,
// //   },
// //   welcomeText: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#ffffff',
// //     marginBottom: 10,
// //   },
// //   subtitle: {
// //     fontSize: 18,
// //     color: '#e0e0e0',
// //   },
// //   content: {
// //     padding: 20,
// //   },
// //   card: {
// //     backgroundColor: '#ffffff',
// //     borderRadius: 15,
// //     padding: 20,
// //     marginBottom: 20,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //   },
// //   cardTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#192f6a',
// //     marginBottom: 10,
// //   },
// //   cardText: {
// //     fontSize: 16,
// //     color: '#666666',
// //   },
// // });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Home() {
//   const [activeTab, setActiveTab] = useState('daily');
//   const [dailyDoses, setDailyDoses] = useState([]);
//   const [stockDetails, setStockDetails] = useState([]);
//   const [weeklyConsumption, setWeeklyConsumption] = useState([]);
//   const [lowStock, setLowStock] = useState([]);

//   // useEffect(() => {
//   //   fetchMedicineData();
//   // }, []);

//   const fetchMedicineData = async () => {
//     try {
//       // const userId = await AsyncStorage.getItem('userId');
//       // Fetch data from your API using userId
//       // Update the state variables accordingly
//     } catch (error) {
//       console.error('Error fetching medicine data:', error);
//     }
//   };

//   const renderDailyDoses = () => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>Today's Medications</Text>
//       {dailyDoses.map((med, index) => (
//         <View key={index} style={styles.medicineCard}>
//           <Text style={styles.medicineName}>{med.name}</Text>
//           <View style={styles.medicineDetails}>
//             <Text>Taken: {med.taken}</Text>
//             <Text>Left: {med.remaining}</Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );

//   const renderStockDetails = () => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>Stock Details</Text>
//       {stockDetails.map((med, index) => (
//         <View key={index} style={styles.medicineCard}>
//           <Text style={styles.medicineName}>{med.name}</Text>
//           <View style={styles.medicineDetails}>
//             <Text>Quantity: {med.quantity}</Text>
//             <Text>Expires: {med.expiryDate}</Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );

//   const renderWeeklyConsumption = () => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>Weekly Consumption</Text>
//       {weeklyConsumption.map((record, index) => (
//         <View key={index} style={styles.medicineCard}>
//           <Text style={styles.medicineName}>{record.name}</Text>
//           <Text>Used: {record.used} pills this week</Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <LinearGradient
//         colors={['#4c669f', '#3b5998', '#192f6a']}
//         style={styles.header}
//       >
//         <Text style={styles.welcomeText}>Medicine Dashboard</Text>
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'daily' && styles.activeTab]}
//             onPress={() => setActiveTab('daily')}
//           >
//             <Text style={[styles.tabText, activeTab === 'daily' && styles.activeTabText]}>Daily</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'stock' && styles.activeTab]}
//             onPress={() => setActiveTab('stock')}
//           >
//             <Text style={[styles.tabText, activeTab === 'stock' && styles.activeTabText]}>Stock</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'weekly' && styles.activeTab]}
//             onPress={() => setActiveTab('weekly')}
//           >
//             <Text style={[styles.tabText, activeTab === 'weekly' && styles.activeTabText]}>Weekly</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>

//       <View style={styles.content}>
//         {activeTab === 'daily' && renderDailyDoses()}
//         {activeTab === 'stock' && renderStockDetails()}
//         {activeTab === 'weekly' && renderWeeklyConsumption()}

//         <View style={styles.lowStockContainer}>
//           <Text style={styles.lowStockTitle}>Low Stock Alert</Text>
//           {lowStock.map((med, index) => (
//             <View key={index} style={styles.lowStockCard}>
//               <Ionicons name="warning" size={24} color="#ff6b6b" />
//               <Text style={styles.lowStockText}>{med.name} is running low ({med.quantity} left)</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     padding: 30,
//     paddingTop: 60,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 15,
//     padding: 5,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   activeTab: {
//     backgroundColor: '#ffffff',
//   },
//   tabText: {
//     color: '#ffffff',
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: '#192f6a',
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 20,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 15,
//   },
//   medicineCard: {
//     backgroundColor: '#ffffff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   medicineName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 10,
//   },
//   medicineDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   lowStockContainer: {
//     marginTop: 20,
//   },
//   lowStockTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#ff6b6b',
//     marginBottom: 15,
//   },
//   lowStockCard: {
//     backgroundColor: '#ffe5e5',
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   lowStockText: {
//     marginLeft: 10,
//     color: '#ff6b6b',
//     fontSize: 16,
//   },
// });

/////////old//////

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';

// export default function Home() {
//   const [activeTab, setActiveTab] = useState('daily');
  
//   // Dummy data
//   const [dailyDoses] = useState([
//     { name: 'Paracetamol', taken: 2, remaining: 5 },
//     { name: 'Vitamin C', taken: 1, remaining: 3 }
//   ]);

//   const [stockDetails] = useState([
//     { name: 'Paracetamol', quantity: 30, expiryDate: '2024-12-01' },
//     { name: 'Vitamin C', quantity: 50, expiryDate: '2025-01-15' }
//   ]);

//   const [weeklyConsumption] = useState([
//     { name: 'Paracetamol', used: 14 },
//     { name: 'Vitamin C', used: 7 }
//   ]);

//   const [lowStock] = useState([
//     { name: 'Ibuprofen', quantity: 5 }
//   ]);

//   const renderDailyDoses = () => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>Today's Medications</Text>
//       {dailyDoses.map((med, index) => (
//         <View key={index} style={styles.medicineCard}>
//           <Text style={styles.medicineName}>{med.name}</Text>
//           <View style={styles.medicineDetails}>
//             <Text>Taken: {med.taken}</Text>
//             <Text>Left: {med.remaining}</Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );

//   const renderStockDetails = () => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>Stock Details</Text>
//       {stockDetails.map((med, index) => (
//         <View key={index} style={styles.medicineCard}>
//           <Text style={styles.medicineName}>{med.name}</Text>
//           <View style={styles.medicineDetails}>
//             <Text>Quantity: {med.quantity}</Text>
//             <Text>Expires: {med.expiryDate}</Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );

//   const renderWeeklyConsumption = () => (
//     <View style={styles.sectionContainer}>
//       <Text style={styles.sectionTitle}>Weekly Consumption</Text>
//       {weeklyConsumption.map((record, index) => (
//         <View key={index} style={styles.medicineCard}>
//           <Text style={styles.medicineName}>{record.name}</Text>
//           <Text>Used: {record.used} pills this week</Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <LinearGradient
//         colors={['#4c669f', '#3b5998', '#192f6a']}
//         style={styles.header}
//       >
//         <Text style={styles.welcomeText}>Medicine Dashboard</Text>
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'daily' && styles.activeTab]}
//             onPress={() => setActiveTab('daily')}
//           >
//             <Text style={[styles.tabText, activeTab === 'daily' && styles.activeTabText]}>Daily</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'stock' && styles.activeTab]}
//             onPress={() => setActiveTab('stock')}
//           >
//             <Text style={[styles.tabText, activeTab === 'stock' && styles.activeTabText]}>Stock</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'weekly' && styles.activeTab]}
//             onPress={() => setActiveTab('weekly')}
//           >
//             <Text style={[styles.tabText, activeTab === 'weekly' && styles.activeTabText]}>Weekly</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>

//       <View style={styles.content}>
//         {activeTab === 'daily' && renderDailyDoses()}
//         {activeTab === 'stock' && renderStockDetails()}
//         {activeTab === 'weekly' && renderWeeklyConsumption()}

//         <View style={styles.lowStockContainer}>
//           <Text style={styles.lowStockTitle}>Low Stock Alert</Text>
//           {lowStock.map((med, index) => (
//             <View key={index} style={styles.lowStockCard}>
//               <Ionicons name="warning" size={24} color="#ff6b6b" />
//               <Text style={styles.lowStockText}>{med.name} is running low ({med.quantity} left)</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     padding: 30,
//     paddingTop: 60,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 15,
//     padding: 5,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   activeTab: {
//     backgroundColor: '#ffffff',
//   },
//   tabText: {
//     color: '#ffffff',
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: '#192f6a',
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 20,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 15,
//   },
//   medicineCard: {
//     backgroundColor: '#ffffff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   medicineName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 10,
//   },
//   medicineDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   lowStockContainer: {
//     marginTop: 20,
//   },
//   lowStockTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#ff6b6b',
//     marginBottom: 15,
//   },
//   lowStockCard: {
//     backgroundColor: '#ffe5e5',
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   lowStockText: {
//     marginLeft: 10,
//     color: '#ff6b6b',
//     fontSize: 16,
//   },
// });





import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function Home() {
  const [activeTab, setActiveTab] = useState('daily');
  
  // States for real data fetched from APIs
  const [dailyDoses, setDailyDoses] = useState([]);
  const [stockDetails, setStockDetails] = useState([]);
  const [weeklyConsumption, setWeeklyConsumption] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from API on component mount
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       // Replace with your actual API URLs
  //       const dailyResponse = await axios.get('/api/daily-doses');
  //       const stockResponse = await axios.get('/api/v1/healthproduct/user/{userid}');
  //       const weeklyResponse = await axios.get('/api/v1/logs/{userid}/time/7///weekly-consumption');
  //       const lowStockResponse = await axios.get('/api/v1/healthproduct/user/lower/{userid}///low-stock');
        
  //       // Set the fetched data into state
  //       setDailyDoses(dailyResponse.data);
  //       setStockDetails(stockResponse.data);
  //       setWeeklyConsumption(weeklyResponse.data);
  //       setLowStock(lowStockResponse.data);
  //     } catch (error) {
  //       Alert.alert('Error', 'Failed to fetch data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty array ensures this runs only once when the component mounts

  const renderDailyDoses = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Today's Medications</Text>
      {dailyDoses.map((med, index) => (
        <View key={index} style={styles.medicineCard}>
          <Text style={styles.medicineName}>{med.name}</Text>
          <View style={styles.medicineDetails}>
            <Text>Taken: {med.taken}</Text>
            <Text>Left: {med.remaining}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderStockDetails = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Stock Details</Text>
      {stockDetails.map((med, index) => (
        <View key={index} style={styles.medicineCard}>
          <Text style={styles.medicineName}>{med.name}</Text>
          <View style={styles.medicineDetails}>
            <Text>Stock: {med.stock}</Text>
            <Text>Threshold: {med.threshold}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderWeeklyConsumption = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Weekly Consumption</Text>
      {weeklyConsumption.map((med, index) => (
        <View key={index} style={styles.medicineCard}>
          <Text style={styles.medicineName}>{med.name}</Text>
          <View style={styles.medicineDetails}>
            <Text>Consumed: {med.consumed}</Text>
            <Text>Remaining: {med.remaining}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderLowStock = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Low Stock Medications</Text>
      {lowStock.map((med, index) => (
        <View key={index} style={styles.medicineCard}>
          <Text style={styles.medicineName}>{med.name}</Text>
          <View style={styles.medicineDetails}>
            <Text>Stock Left: {med.stock}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'daily':
        return renderDailyDoses();
      case 'stock':
        return renderStockDetails();
      case 'weekly':
        return renderWeeklyConsumption();
      case 'low':
        return renderLowStock();
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#6a11cb', '#2575fc']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Medicine Dashboard</Text>
      </LinearGradient>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('daily')} style={styles.tabButton}>
          <Text style={activeTab === 'daily' ? styles.activeTab : styles.inactiveTab}>Daily Doses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('stock')} style={styles.tabButton}>
          <Text style={activeTab === 'stock' ? styles.activeTab : styles.inactiveTab}>Stock Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('weekly')} style={styles.tabButton}>
          <Text style={activeTab === 'weekly' ? styles.activeTab : styles.inactiveTab}>Weekly Consumption</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('low')} style={styles.tabButton}>
          <Text style={activeTab === 'low' ? styles.activeTab : styles.inactiveTab}>Low Stock</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        renderContent()
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
  },
  activeTab: {
    fontSize: 16,
    color: '#2575fc',
    fontWeight: 'bold',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#888',
  },
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  medicineCard: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicineDetails: {
    marginTop: 5,
    fontSize: 14,
  },
});