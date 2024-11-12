// src/screens/NewGamesScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const games = [
  { id: '1', title: 'Game A', releaseDate: '2024-11-15' },
  { id: '2', title: 'Game B', releaseDate: '2024-12-01' },
  { id: '3', title: 'Game C', releaseDate: '2025-01-10' },
  // Add more games as needed
];

const NewGamesScreen = () => {
  const renderGame = ({ item }) => (
    <TouchableOpacity style={styles.gameCard}>
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameReleaseDate}>Release Date: {item.releaseDate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Best New & Upcoming Releases</Text>
      <FlatList
        data={games}
        renderItem={renderGame}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameCard: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameReleaseDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default NewGamesScreen;
