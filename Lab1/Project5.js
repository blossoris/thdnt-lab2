import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



//MSSV 2124802010728 - Võ Ngân Khanh

const Project5 = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.square, {backgroundColor: '#00bfff'}]}>
            <Text style={styles.text}>Square 1</Text>
        </View>
        <View style={[styles.square, {backgroundColor: '#20b2aa'}]}>
            <Text style={styles.text}>Square 2</Text>
        </View>
        <View style={[styles.square, {backgroundColor: '#db7093'}]}>
            <Text style={styles.text}>Square 3</Text>
        </View>
    </View>
  )
}

export default Project5

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 'auto',
        marginVertical: 'auto',
        marginTop: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    square:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        margin: 20,
    },
    text:{
        marginHorizontal: 'auto'
    }
})