import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';

export default function Notification() {
  const { changeImage } = useLocalSearchParams<{ changeImage?: string }>();

  const [currentImage, setCurrentImage] = useState(
    require('@/assets/images/hojicard.png')
  );
  const [imageIndex, setImageIndex] = useState(0); // Track the current image index

  const images = [
    require('@/assets/images/hojicard.png'),
    require('@/assets/images/hojicard1.png'),
    require('@/assets/images/hojicard2.png'),
    require('@/assets/images/hojicard3.png'),
  ];

  // Load the imageIndex from AsyncStorage on component mount
  useEffect(() => {
    const loadImageIndex = async () => {
      try {
        const storedIndex = await AsyncStorage.getItem('currentImageIndex');
        if (storedIndex !== null) {
          const parsedIndex = parseInt(storedIndex, 10);
          if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < images.length) {
            setImageIndex(parsedIndex);
            setCurrentImage(images[parsedIndex]);
          }
        }
      } catch (error) {
        console.error('Failed to load image index from storage:', error);
      }
    };
    loadImageIndex();
  }, []);

  // Update the imageIndex and save it to AsyncStorage when `changeImage` is true
  useEffect(() => {
    const updateImageIndex = async () => {
      if (changeImage === 'true' || imageIndex>=1) {
        const newIndex = (imageIndex + 1) % images.length;
        setImageIndex(newIndex);
        setCurrentImage(images[newIndex]);

        try {
          await AsyncStorage.setItem('currentImageIndex', newIndex.toString());
        } catch (error) {
          console.error('Failed to save image index to storage:', error);
        }
      }
    };

    updateImageIndex();
  }, [changeImage]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={currentImage} style={styles.image} />
      </View>
      <View style={styles.scanContainer}>
        <ThemedText style={styles.scan}>SCAN TO GET STAMP</ThemedText>
        <Image
          source={require('@/assets/images/scan.png')}
          style={styles.scanImage}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4FF',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 600,
    height: 400,
    resizeMode: 'contain',
  },
  scanContainer: {
    alignItems: 'center',
  },
  scan: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scanImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});