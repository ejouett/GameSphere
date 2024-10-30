import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Define the type of the navigation prop based on the RootStackParamList
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameSphere</Text>
      <Image
        source={{ uri: 'https://path-to-your-image.png' }} // Replace with your image URL
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.buttonText, styles.signUpButtonText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D8BFD8',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  signUpButton: {
    backgroundColor: '#4B0082',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signUpButtonText: {
    color: '#FFFFFF',
  },
});

export default LoginScreen;
