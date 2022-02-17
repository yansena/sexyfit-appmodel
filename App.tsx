import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
 } from '@expo-google-fonts/roboto';

 import {
   IBMPlexSans_400Regular,
   IBMPlexSans_500Medium,
   IBMPlexSans_700Bold
  } from '@expo-google-fonts/ibm-plex-sans'

import theme from './src/styles/theme';

import {Login} from "./src/pages/Login";
import {SplashScreen}  from './src/pages/Splash';
import { Routes } from './src/routes';

export default function App() {
  const [ fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
