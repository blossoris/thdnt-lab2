import React,{useState, useEffect} from 'react'; 
import { StyleSheet,View, Text} from 'react-native'; 
import DetailListItem from '../components/DetailListItem';
 
const Options =({navigation})=> 
{ 
    return ( 
            <View style={styles.container}> 
                <DetailListItem title="Update Profile" /> 
                <DetailListItem title="Change Language" /> 
                <DetailListItem title="Sign Out" /> 
            </View> 
    ); 
} 
 //MSSV 2124802010728 - Võ Ngân Khanh

const styles = StyleSheet.create( 
    { 
        container:{ 
            flex:1, 
            backgroundColor:'white', 
        }, 
    } 
); 
 
export default Options;