// src/components/InfluencerCard.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface InfluencerCardProps {
  name: string;
  imageUri: string;
  rating: number;
  categories: string[];
}

export const InfluencerCard: React.FC<InfluencerCardProps> = ({
  name,
  imageUri,
  rating,
  categories,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      {/* Add rating display */}
      {/* Map through categories and display them */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Card styles
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    // Image styles
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    // Name text styles
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  // Add styles for rating and categories
});
