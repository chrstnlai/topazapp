import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';

const DiscoverScreen = () => {
  const categories = ['Coffee shop', 'Ice cream', 'Bakery'];
  const participatingStores = [
    { id: '1', name: 'Nest Tea House', logo: require('@/assets/images/s1.png') },
    { id: '2', name: 'Boba Co.', logo: require('@/assets/images/s2.png') },
    { id: '3', name: 'Afters Ice Cream', logo: require('@/assets/images/s3.png') },
    { id: '4', name: 'Verve Coffee', logo: require('@/assets/images/s4.png') },
    { id: '5', name: 'Paris Baguette', logo: require('@/assets/images/s5.png') },
    { id: '6', name: 'Old Ferry Donut', logo: require('@/assets/images/s6.png')},
  ];

  const leavingSoon = [
    {
      id: '1',
      name: 'Arcadia Donuts',
      offer: '$5 off your order with 3 stamps',
      validUntil: '12/01',
      image: require('@/assets/images/donut1.png'),
      tag: 'Bakery',
      badge: '$5 off',
    },
    {
      id: '2',
      name: 'Golden Donuts',
      offer: 'Free donut with 2 stamps',
      validUntil: '12/01',
      image: require('@/assets/images/donut2.png'),
      tag: 'Bakery',
      badge: 'FREE',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Explore</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for deals, restaurants, etc."
        />
      </View>

      {/* Location and Categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.locationText}>Near me</Text>
        <Text style={styles.locationValue}>3030 Shrine Pl ▼</Text>
        <View style={styles.categoriesList}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('@/assets/images/626.jpeg')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>626 Hospitality Group</Text>
          <Text style={styles.bannerSubtitle}>Earn 3 stamps for a free scoop!</Text>
          <Text style={styles.bannerTag}>Ice cream</Text>
        </View>
      </View>

      {/* Participating Stores */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Participating stores near you</Text>
        <FlatList
          horizontal
          data={participatingStores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={item.logo} style={styles.storeLogo} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Leaving Soon */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Leaving soon</Text>
        <FlatList
          horizontal
          data={leavingSoon}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.offerCard}>
             <Image source={item.image} style={styles.offerImage} />
              <View style={styles.offerDetails}>
                <Text style={styles.offerTag}>{item.tag}</Text>
                <Text style={styles.offerName}>{item.name}</Text>
                <Text style={styles.offerDescription}>{item.offer}</Text>
                <Text style={styles.offerValid}>Offer valid until {item.validUntil}</Text>
              </View>
              <View style={styles.offerBadge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    marginBottom: 20,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  locationText: {
    fontSize: 14,
    color: '#888',
  },
  locationValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  categoriesList: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: '#EFEFEF',
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#555',
  },
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  bannerImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  bannerSubtitle: {
    fontSize: 14,
    marginVertical: 5,
  },
  bannerTag: {
    fontSize: 12,
    color: '#888',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  storeLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  offerCard: {
    width: 200,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginRight: 15,
    overflow: 'hidden',
  },
  offerImage: {
    width: '100%',
    height: 100,
  },
  offerDetails: {
    padding: 10,
  },
  offerTag: {
    fontSize: 12,
    color: '#888',
  },
  offerName: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  offerDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  offerValid: {
    fontSize: 12,
    color: '#888',
  },
  offerBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF4136',
    padding: 5,
    borderRadius: 5,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default DiscoverScreen;
