import React, { createContext, useMemo, useState } from 'react';
import ResponsiveAppBar from './Navbar/ResponsiveAppBar';
import {  CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider, } from '@mui/material/styles';
import HeroBanner from './Banner/HeroBanner';
import KeyQuestions from './KeyQuestions/KeyQuestions';
import LogoSlider from './Logo slider/LogoSlider';
import ReviewsSection from './Reviews Section/ReviewsSection';
import SpreadsheetSection from './SpreadsheetSection/SpreadsheetSection';
import Footer from '../Footer/Footer';

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
            <HeroBanner/>
            <KeyQuestions/>
            <LogoSlider/>
            <ReviewsSection/>
            <SpreadsheetSection/>
            this is home
            <Footer/>

        </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
        
    );
};

export default Home;