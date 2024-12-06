import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { getCurrentImageIndex, incrementImageIndex } from './sharedState';
import { useRouter } from 'expo-router';


export default function Notification() {
  const { changeImage, timestamp } = useLocalSearchParams<{ changeImage?: string; timestamp?: string }>();
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

  useEffect(() => {
    if (changeImage === 'true' && timestamp) {
      const newIndex = incrementImageIndex(images.length);
      setImageIndex(newIndex);
    } else {
      setImageIndex(getCurrentImageIndex());
    }
  }, [changeImage, timestamp]);

  return (
    <>
      <View style={styles.blackSection}>
      <Image
    source={require('@/assets/images/hojistore.png')}
    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
  />
    <Image
    source={require('@/assets/images/hojititle.png')}
    style={styles.titleImage}
  />
      </View>
      <ThemedView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images[imageIndex]} style={styles.image} />
        </View>
        <View style={styles.scanContainer}></View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  blackSection: {
    flex: 0.4,
    backgroundColor: "#262626",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  titleImage: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
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
    width: 700,
    height: 450,
    resizeMode: 'contain',
    transform: [{ translateX: 0 }, { translateY: -40 }],
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
