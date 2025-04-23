import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

const Project6 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {data.map((item, index) => (
            <View key={item} style={styles.square}>
                <Text>Square {index + 1}</Text>
            </View>
        ))}
    </ScrollView>
  )
}


//MSSV 2124802010728 - Võ Ngân Khanh

export default Project6

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#00bfff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 8,
    },
})
