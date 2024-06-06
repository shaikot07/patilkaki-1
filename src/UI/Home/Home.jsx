import React, { createContext, useMemo, useState } from 'react';
import ResponsiveAppBar from './Navbar/ResponsiveAppBar';
import {  CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider, } from '@mui/material/styles';
import HeroBanner from './Banner/HeroBanner';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });
const Home = () => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      []
    );
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
          typography: {
            fontFamily: 'Proxima Nova, sans-serif',
          },
        }),
      [mode]
    );
    return (

        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
           
          <div>
            <ResponsiveAppBar />
            <HeroBanner></HeroBanner>
            this is home

        </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
        
    );
};

export default Home;