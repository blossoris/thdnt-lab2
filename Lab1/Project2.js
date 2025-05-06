import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


//MSSV 2124802010728 - Võ Ngân Khanh

const Project2 = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => alert('Hello!')}>
            <Text style={styles.Text}>
                Button 1
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Project2

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 'auto',
        marginTop: 50
    },
    Text: {
        color: '#008b8b'
    }
})