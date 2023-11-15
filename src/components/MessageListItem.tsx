// src/components/MessageListItem.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface MessageListItemProps {
  name: string;
  lastMessage: string;
  avatarUri: string;
}

export const MessageListItem: React.FC<MessageListItemProps> = ({
  name,
  lastMessage,
  avatarUri,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: avatarUri }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container styles
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    // Add styles
  },
  avatar: {
    // Avatar styles
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    // Text container styles
    marginLeft: 10,
  },
  name: {
    // Name text styles
    fontWeight: 'bold',
  },
  lastMessage: {
    // Last message text styles
    color: 'grey',
  },
});
