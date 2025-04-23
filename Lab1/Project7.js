import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'


const Project7 = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput style={styles.input} placeholder='John Doe' onChangeText={(text => setName (text))} value={name}></TextInput>
      <View style={styles.button}>
        <Button title="Say hello" onPress = {() => {alert(`Hello, ${name}!`); setName("")}}/>
      </View>
    </View>
  )
}
//MSSV 2124802010728 - Võ Ngân Khanh
export default Project7

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        padding: 50
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    button: {
      width: 100,
      marginHorizontal:'auto'
    }
})