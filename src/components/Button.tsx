// src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Button styles
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    // Text styles
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
