import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageSourcePropType } from 'react-native';

export default function HomeScreen() {
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

  const swipeImages = [
    require('@/assets/images/hojicard.png'),
    require('@/assets/images/bobafriend.png'),
    require('@/assets/images/findnew.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const windowWidth = Dimensions.get('window').width;

  const handleImagePress = (image: ImageSourcePropType) => {
    if (image === images[0]) {
      // If the clicked image is hojicard.png, navigate to the notification page
      router.push('/notification');
    }
  };

  const renderSwipeImage = ({ item }: { item: ImageSourcePropType }) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
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
        <FlatList
          data={swipeImages} // Use the new swipeImages array here
          renderItem={renderSwipeImage}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={windowWidth}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / windowWidth
            );
            setCurrentIndex(index);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackSection: {
    flex: 1.5,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  remainingSection: {
    flex: 3,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 600,
    resizeMode: 'contain',
    position: 'relative',
    top: -70,
  },
  flatListContent: {
    alignItems: 'center',
    justifyContent: 'center',
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    width: 350,
    top: 50,
    marginBottom: 20,
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#262626',
  },
});
