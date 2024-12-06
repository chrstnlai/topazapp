import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { getCurrentImageIndex } from './sharedState'; // Import from shared state

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  const images = [
    require('@/assets/images/hojicard.png'),
    require('@/assets/images/hojicard1.png'),
    require('@/assets/images/hojicard2.png'),
    require('@/assets/images/hojicard3.png'),
    require('@/assets/images/hojicard4.png'),
    require('@/assets/images/hojicard5.png'),
    require('@/assets/images/hojicard6.png'),
    require('@/assets/images/hojicard7.png'),
    require('@/assets/images/hojicard8.png'),
    require('@/assets/images/hojicardfree.png'),
  ];

  const [imageIndex, setImageIndex] = useState(getCurrentImageIndex());

  // If you need the HomeScreen to update dynamically whenever the image changes
  // you could implement a mechanism to re-render (e.g. by listening to focus events)
  // For now, it will show the last known index at the time of navigation.
  const handleSwipeRight = () => {
    // If you also want to go backwards when swiping right:
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const handleCardPress = () => {
    // Navigate to notification when the image is tapped
    router.push('/notification');
  };

  return (
    <>
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
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => router.push('/notification')}>
              <Image
                source={images[imageIndex]} // Use the currentIndex image
                style={styles.image}
              />
            </TouchableOpacity>
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
    position: 'absolute',
    top: '40%',
    left: '10%',
  },
  highlight: {
    color: '#FFD700',
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
