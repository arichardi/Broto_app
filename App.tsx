import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import {useFonts, YesevaOne_400Regular} from '@expo-google-fonts/yeseva-one'
import {Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto'
import Apploading from 'expo-app-loading'

import { MyPlants } from './src/screens/MyPlants/Index';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    YesevaOne_400Regular,
  });
  
  if(!fontsLoaded){
    return <Apploading />
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <MyPlants />
      </ThemeProvider>
    </>
  );
}


