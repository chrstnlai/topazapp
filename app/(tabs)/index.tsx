import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,  TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

export default function HomeScreen() {
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
          <Link 
            action={{ 
              type: 'navigate', 
              payload: { name: 'Details' },
            }}
          >
            <Image
              source={require('@/assets/images/hojicard.png')}
              style={styles.image}
            />
          </Link>
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
    transform: [{ translateX: -100 }, { translateY: -30 }], // Offset to exactly center it
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
    flex: 1.5, // 1/4 of the screen height
    backgroundColor: "#262626",
    justifyContent: 'center', // Optional: vertically center the content
    alignItems: 'center', // Optional: horizontally center the content
    borderBottomLeftRadius: 50, // Rounded bottom-left corner
    borderBottomRightRadius: 50, // Rounded bottom-right corner
    overflow: 'hidden', // Ensure content stays within rounded cornersr the content
  },
  remainingSection: {
    flex: 3, // 3/4 of the screen height
    backgroundColor: "#f5f5f5", // Light gray or any other color
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  image: {
    width: 250,
    height: 600,
    resizeMode: 'contain',
    transform: [{ translateX: -10 }, { translateY:-150

    }], 
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
    transform: [{ translateX: -10 }, { translateY: -10

     }], 
  },
});
