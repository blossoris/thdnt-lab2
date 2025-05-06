import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const Project4 = () => {
    const [pressCount, setPressCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title={'Press me'} onPress={() => setPressCount(pressCount+1)}/>
    </View>
  )
}


//MSSV 2124802010728 - Võ Ngân Khanh

export default Project4

const styles = StyleSheet.create({
    container:{
        marginHorizontal:'auto',
        marginTop: 50
    }
})