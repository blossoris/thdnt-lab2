import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Project7 from './Project7';
import Project8 from './Project8';
import Calculator from './Calculator';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project1" component={Project1} />
        <Stack.Screen name="Project2" component={Project2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router

const styles = StyleSheet.create({})