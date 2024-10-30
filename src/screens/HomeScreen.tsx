import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GameSphere Features</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GameReleases')}>
        <Text style={styles.cardTitle}>Game Releases</Text>
        <Text style={styles.cardDescription}>See newly released games as well as anticipated releases</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GameUpdates')}>
        <Text style={styles.cardTitle}>Game Updates</Text>
        <Text style={styles.cardDescription}>See new game updates as well as anticipated updates.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GameReviews')}>
        <Text style={styles.cardTitle}>Game Reviews</Text>
        <Text style={styles.cardDescription}>See reviews about video games.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CommunityForum')}>
        <Text style={styles.cardTitle}>Community Forum</Text>
        <Text style={styles.cardDescription}>Be a part of the GameSphere community and see/create topics of discussion.</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;

