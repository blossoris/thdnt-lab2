import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Project 1" onPress={() => navigation.navigate('Project1')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Project 2" onPress={() => navigation.navigate('Project2')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Project 3" onPress={() => navigation.navigate('Project3')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Project 4" onPress={() => navigation.navigate('Project4')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Project 5" onPress={() => navigation.navigate('Project5')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Project 6" onPress={() => navigation.navigate('Project6')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Project 7" onPress={() => navigation.navigate('Project7')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default HomeScreen;
