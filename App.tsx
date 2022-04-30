import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { MyPlants } from './src/screens/MyPlants/Index';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MyPlants />
      </ThemeProvider>
    </>
  );
}


