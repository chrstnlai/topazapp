import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  // React Navigation Hook
  const navigation = useNavigation();

  // Expo Router Hook
  const router = useRouter();

  return (
    <>
      {/* Header */}
      <View style={styles.container}>
        <View style={styles.blackSection}>
          <Text style={styles.welcomeText}>
            Welcome back, <Text style={styles.highlight}>Sarah!</Text>
          </Text>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#aaa" />
            <TextInput
              style={styles.searchInput}
              placeholder="Can't find the card you’re looking for?"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        <View style={styles.remainingSection}>
          {/* Navigate using React Navigation */}
        

          {/* Navigate using Expo Router */}
          <View style={{ marginTop: 20 }}>
            <Button
              title="Go to Notification (Expo Router)"
              onPress={() => router.push('/notification')}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#262626",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    position: 'absolute', // Position text over the black section
    top: '50%', // Vertically center the text
    left: '30%', // Horizontally center the text
    transform: [{ translateX: -90 }, { translateY: -30 }], // Offset to exactly center it
  },
  highlight: {
    color: '#FFD700', // Gold color
    fontWeight: 'bold',
  },
  profileIcon: {
    padding: 8,
    backgroundColor: '#444444',
    borderRadius: 50,
  },
  container: {
    flex: 1,
  },
  blackSection: {
    flex: 1.5,
    backgroundColor: "#262626",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  remainingSection: {
    flex: 3,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 600,
    resizeMode: 'contain',
    transform: [{ translateX: -10 }, { translateY: -150 }],
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    width:350,
    top:50,
    marginBottom: 20,
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
});
