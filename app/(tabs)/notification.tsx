let currentIndex = 0;

function getCurrentImageIndex(): number {
  return currentIndex;
}

function incrementImageIndex(imagesLength: number): number {
  currentIndex = (currentIndex + 1) % imagesLength;
  return currentIndex;
}

import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';

export default function Notification() {
  const { changeImage, timestamp } = useLocalSearchParams<{ changeImage?: string; timestamp?: string }>();

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

  useEffect(() => {
    // If we should change the image (each navigation triggers a new timestamp),
    // increment the index and update state.
    if (changeImage === 'true' && timestamp) {
      const newIndex = incrementImageIndex(images.length);
      setImageIndex(newIndex);
    } else {
      // If not changing the image, just ensure we're showing the current index.
      setImageIndex(getCurrentImageIndex());
    }
  }, [changeImage, timestamp]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images[imageIndex]} style={styles.image} />
      </View>
      <View style={styles.scanContainer}>
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
