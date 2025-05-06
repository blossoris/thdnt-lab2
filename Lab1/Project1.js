import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//MSSV 2124802010728 - Võ Ngân Khanh

const project1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  )
}

export default project1

const styles = StyleSheet.create({
    container:{
      marginTop: '50',
      backgroundColor: 'aqua',
      justifyContent: 'center',
      width: 200,
      height: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'black'
    }
})