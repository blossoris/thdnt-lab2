import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import ContactListItem from './Lab2/components/ContactListItem'
import Contact from './Lab2/screens/Contact';
import Profile from './Lab2/screens/Profile';
import Routes2 from './Lab2/Routes2';
import User from './Lab2/screens/User';
import Favorites from './Lab2/screens/Favorites';
import Options from './Lab2/screens/Options';
import RouteDrawer from './Lab2/RouteDrawer'
import { Provider } from 'react-redux'; 
import Store from './Lab2/Store';

 //MSSV 2124802010728 - Võ Ngân Khanh

export default function App() {
  return (
    <Provider store={Store}> 
      <RouteDrawer/> 
      {/* <Routes2/> */}
    </Provider> 
  );
}