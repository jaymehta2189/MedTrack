// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { PieChart } from 'react-native-chart-kit';

// const profileData = {
//   name: 'Sarah Johnson',
//   email: 'sarah.johnson@example.com',
//   photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
// };

// const medicineStats = [
//   {
//     name: 'Amoxicillin',
//     missedDoses: 20,
//     color: '#6366f1',
//     legendFontColor: '#64748b',
//   },
//   {
//     name: 'Lisinopril',
//     missedDoses: 15,
//     color: '#8b5cf6',
//     legendFontColor: '#64748b',
//   },
//   {
//     name: 'Metformin',
//     missedDoses: 10,
//     color: '#ec4899',
//     legendFontColor: '#64748b',
//   },
//   {
//     name: 'Omeprazole',
//     missedDoses: 5,
//     color: '#14b8a6',
//     legendFontColor: '#64748b',
//   }
// ];

// export default function Profile() {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.profileInfo}>
//           <Image
//             source={{ uri: profileData.photo }}
//             style={styles.profilePhoto}
//           />
//           <View style={styles.nameContainer}>
//             <Text style={styles.name}>{profileData.name}</Text>
//             <Text style={styles.email}>{profileData.email}</Text>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.editButton}>
//           <Ionicons name="pencil" size={20} color="#6366f1" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.statsContainer}>
//         <Text style={styles.sectionTitle}>Missed Medicine Statistics</Text>
//         <Text style={styles.subtitle}>Percentage of missed doses by medicine</Text>

//         <PieChart
//           data={medicineStats}
//           width={Dimensions.get('window').width - 32}
//           height={220}
//           chartConfig={{
//             color: (opacity = 1) => `rgba(99, 102, 241, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           }}
//           accessor="missedDoses"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           absolute={false}
//           style={styles.chart}
//         />
//       </View>

//       <View style={styles.menuContainer}>
//         <TouchableOpacity style={styles.menuItem}>
//           <Ionicons name="notifications-outline" size={24} color="#64748b" />
//           <Text style={styles.menuText}>Notifications</Text>
//           <Ionicons name="chevron-forward" size={24} color="#64748b" />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Ionicons name="settings-outline" size={24} color="#64748b" />
//           <Text style={styles.menuText}>Settings</Text>
//           <Ionicons name="chevron-forward" size={24} color="#64748b" />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Ionicons name="help-circle-outline" size={24} color="#64748b" />
//           <Text style={styles.menuText}>Help & Support</Text>
//           <Ionicons name="chevron-forward" size={24} color="#64748b" />
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
//           <Ionicons name="log-out-outline" size={24} color="#ef4444" />
//           <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8fafc',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#ffffff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 16,
//   },
//   profilePhoto: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 3,
//     borderColor: '#6366f1',
//   },
//   nameContainer: {
//     gap: 4,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1e293b',
//   },
//   email: {
//     fontSize: 14,
//     color: '#64748b',
//   },
//   editButton: {
//     padding: 8,
//     backgroundColor: '#eff6ff',
//     borderRadius: 8,
//   },
//   statsContainer: {
//     padding: 16,
//     backgroundColor: '#ffffff',
//     marginTop: 16,
//     borderRadius: 12,
//     marginHorizontal: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1e293b',
//     marginBottom: 4,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#64748b',
//     marginBottom: 16,
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   menuContainer: {
//     padding: 16,
//     gap: 8,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 12,
//     gap: 12,
//   },
//   menuText: {
//     fontSize: 16,
//     color: '#1e293b',
//     flex: 1,
//   },
//   logoutButton: {
//     marginTop: 8,
//   },
//   logoutText: {
//     color: '#ef4444',
//   },
// });

////////

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";
import { router } from "expo-router";
import { getUserProfile, getMedicineStats, logoutUser } from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [medicineStats, setMedicineStats] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await AsyncStorage.getItem("userData");
      const user = JSON.parse(userData);
      console.log(user);
      setUser(user);
      const [statsData] = await Promise.all([
        // getUserProfile(),
        getMedicineStats(),
      ]);

      console.log(statsData);

      // setProfile(profileData);
      setMedicineStats(
        statsData.map((stat) => ({
          name: stat.healthProductName,
          missedDoses: stat.MisCount,
          color: getRandomColor(),
          legendFontColor: "#64748b",
        }))
      );

      console.log(medicineStats);
    } catch (err) {
      setError("Failed to load profile data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.replace("/auth/SignIn");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getRandomColor = () => {
    const colors = [
      "#6366f1",
      "#8b5cf6",
      "#ec4899",
      "#14b8a6",
      "#f59e0b",
      "#ef4444",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadProfileData}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri:
                profile?.photoUrl ||
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
            }}
            style={styles.profilePhoto}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={20} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {medicineStats.length > 0 ? (
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Missed Medicine Statistics</Text>
          <Text style={styles.subtitle}>
            Percentage of missed doses by medicine
          </Text>

          <PieChart
            data={medicineStats}
            width={Dimensions.get("window").width - 32}
            height={220}
            chartConfig={{
              color: (opacity = 1) => `rgba(99, 102, 241, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="missedDoses"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute={false}
            style={styles.chart}
          />
        </View>
      ) : (
        <View style={styles.noStatsContainer}>
          <Text style={styles.noStatsText}>
            No medicine statistics available
          </Text>
        </View>
      )}

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={24} color="#64748b" />
          <Text style={styles.menuText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color="#64748b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#64748b" />
          <Text style={styles.menuText}>Settings</Text>
          <Ionicons name="chevron-forward" size={24} color="#64748b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#64748b" />
          <Text style={styles.menuText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={24} color="#64748b" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={24} color="#ef4444" />
          <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  errorText: {
    color: "#ef4444",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#6366f1",
  },
  nameContainer: {
    gap: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1e293b",
  },
  email: {
    fontSize: 16,
    marginLeft: 2,
    color: "#64741b",
  },
  editButton: {
    padding: 8,
    backgroundColor: "#eff6ff",
    borderRadius: 8,
  },
  statsContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
    marginTop: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  noStatsContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
    marginTop: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  noStatsText: {
    fontSize: 16,
    color: "#64748b",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  menuContainer: {
    padding: 16,
    gap: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: "#1e293b",
    flex: 1,
  },
  logoutButton: {
    marginTop: 8,
  },
  logoutText: {
    color: "#ef4444",
  },
});
