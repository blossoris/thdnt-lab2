import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Router from './Lab1/Router';
//MSSV 2124802010728 - Võ Ngân Khanh

export default function App() {
  return (
    <PaperProvider>
      <Router/>
    </PaperProvider>
  );
}