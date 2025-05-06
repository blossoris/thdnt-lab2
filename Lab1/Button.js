import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, _onPress, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={_onPress} style={[styles.button, buttonStyle]}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;


//MSSV 2124802010728 - Võ Ngân Khanh

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
