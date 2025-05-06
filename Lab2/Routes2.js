import React from 'react'; 
import {View, Text} from 'react-native'; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Contact from './screens/Contact'; 
import Profile from './screens/Profile'; 
import Favorites from './screens/Favorites';
import User from './screens/User'; 
import Options from './screens/Options';
import { MaterialIcons } from '@expo/vector-icons'; 
import Colors from './utility/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const getTabBarIcon = icon => ({ color }) => ( 
    <MaterialIcons name={icon} size={26} style={{ color }} />  // Use 'color' instead of 'tintColor'
); 

const Stack = createNativeStackNavigator(); 

const ContactsScreens = () => { 
    return ( 
        <Stack.Navigator 
            initialRouteName="Contact"  
            screenOptions={{ 
                headerTintColor: 'white', 
                headerStyle: { backgroundColor: 'tomato' }, 
                headerTitleAlign:'center', 
            }} 
        > 
            <Stack.Screen name='Contact' component={Contact} options={{title:"Contact"}}/> 
            <Stack.Screen  
                name='Profile'  
                component={Profile}  
                options={({route}) => { 
                    const {contact} = route.params; 
                    const {name}= contact; 
                    return { 
                        title: name.split(' ')[0], 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: Colors.blue, 
                        } 
                    }; 
                }} 
            /> 
        </Stack.Navigator> 
    ); 
};

const FavoritesScreens = () => { 
    return ( 
        <Stack.Navigator 
            initialRouteName="Favorites" 
        > 
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/> 
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/> 
        </Stack.Navigator> 
    ); 
};
 //MSSV 2124802010728 - Võ Ngân Khanh

const UserScreens = ({navigation}) => { 
    return ( 
        <Stack.Navigator 
            initialRouteName="User" 
        > 
            <Stack.Screen name='User' component={User}  
                options={{ 
                    headerTitle:"Me", 
                    headerTintColor: 'white', 
                    headerStyle: { 
                        backgroundColor: Colors.blue, 
                    }, 
                    headerRight: () => ( 
                        <MaterialIcons 
                            name="settings" 
                            size={24} 
                            style={{ color: 'white', marginRight: 10 }} 
                            onPress={() => navigation.navigate('UserScreens', { screen: 'Options' })}
                        /> 
                    ), 
                }} 
            /> 
            <Stack.Screen name='Options' component={Options} options={{title:"Options"}}/>
            
        </Stack.Navigator> 
    ); 
};

const Tab = createBottomTabNavigator();  

const TabNavigator = () => { 
    return( 
        <NavigationContainer> 
            <Tab.Navigator 
                initialRouteName='ContactsScreens' 
                tabBarOptions={{
                    activeTintColor: Colors.greyLight, 
                    inactiveTintColor: Colors.greyDark, 
                    style: { backgroundColor: Colors.blue } 
                }}
            > 
                <Tab.Screen name="ContactsScreens" component={ContactsScreens}  
                    options={{ 
                        tabBarIcon: getTabBarIcon('list'), 
                    }} 
                /> 
                <Tab.Screen name="FavoritesScreens" component={FavoritesScreens}  
                    options={{ 
                        tabBarIcon: getTabBarIcon('star'), 
                    }} 
                /> 
                <Tab.Screen name="UserScreens" component={UserScreens}  
                    options={{ 
                        tabBarIcon: getTabBarIcon('person'), 
                    }} 
                /> 
            </Tab.Navigator> 
        </NavigationContainer> 
    ); 
};

export default TabNavigator;
