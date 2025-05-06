import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import Button from './Button';


//MSSV 2124802010728 - Võ Ngân Khanh

const Project3 = () => {
  const handlePress1 = () => {
    Alert.alert('Hello!', 'Bạn chọn Hello');
  };
  const handlePress2 = () => {
    Alert.alert('Goodbye!', 'Bạn chọn goodbye');
  };

  return (
    <View style={styles.container}>
      <Button 
        text="Say hello" 
        _onPress={handlePress1} 
        buttonStyle={{ backgroundColor: 'tomato' }} 
      />
      <Button 
        text="Say goodbye" 
        _onPress={handlePress2} 
        buttonStyle={{ backgroundColor: 'aqua' }} 
      />
    </View>
  );
};

export default Project3;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center'
  }
});
