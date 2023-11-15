// src/components/SearchBar.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  placeholder: string;
  // Add any other props here, such as onChangeText, value, etc.
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        // Add any other TextInput props here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles for the container
    padding: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    // styles for the text input
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
});
