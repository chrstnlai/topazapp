import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

export default function Details() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#262626" barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome back, <Text style={styles.highlight}>Sarah!</Text>
        </Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Ionicons name="scan-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Can't find the card you’re looking for?"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Toggle Buttons (Placeholder) */}
      <View style={styles.toggleButtons}>
        <Ionicons name="albums-outline" size={24} color="white" />
        <Ionicons name="list-outline" size={24} color="white" />
      </View>

      {/* Find New Restaurant Card */}
      <TouchableOpacity style={styles.card}>
        <Ionicons name="add-circle-outline" size={40} color="gray" />
        <Text style={styles.cardText}>Find a new restaurant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626", 
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
  },
  highlight: {
    color: "#F5B900",
    fontWeight: "bold",
  },
  profileIcon: {
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A3A3A",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
  },
  toggleButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
});
