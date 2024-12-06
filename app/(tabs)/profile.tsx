import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfilePage = () => {
  const userData = {
    name: 'Christine Lai',
    email: 'cmlai@usc.edu',
    profilePicture: require('@/assets/images/christine .png'),
    bio: 'Lover of food, culture, and technology. Aspiring to make the world a better place one app at a time.',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <Image source={userData.profilePicture} style={styles.profilePicture} />
      
      {/* Name */}
      <Text style={styles.name}>{userData.name}</Text>

      {/* Email */}
      <Text style={styles.email}>{userData.email}</Text>

      {/* Bio */}
      <Text style={styles.bio}>{userData.bio}</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={[styles.buttonText, styles.logoutButtonText]}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#7679EC',
  },
  logoutButtonText: {
    color: '#fff',
  },
});

export default ProfilePage;
