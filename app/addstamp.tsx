import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";

export default function AddStamp() {
  const router = useRouter();

  useFocusEffect(() => {
    const timeoutId = setTimeout(() => {
      const timestamp = Date.now(); 
      router.push(`/notification?changeImage=true&timestamp=${timestamp}`);
    }, 2000);

    return () => clearTimeout(timeoutId);
  });

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/orangelogo.png')} />
      <ActivityIndicator size="large" color="#808080" />
      <Text style={styles.text}>Adding Stamp...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
});
