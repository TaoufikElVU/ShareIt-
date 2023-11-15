// src/components/CampaignCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CampaignCardProps {
  title: string;
  influencerName: string;
  price: string;
  imageUri: string;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  influencerName,
  price,
  imageUri,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.influencerName}>{influencerName}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container styles
    flexDirection: 'row',
    alignItems: 'center',
    // Add shadow and other styles
  },
  image: {
    // Image styles
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    // Info container styles
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    // Title styles
    fontWeight: 'bold',
  },
  influencerName: {
    // Influencer name styles
  },
  price: {
    // Price text styles
  },
});
