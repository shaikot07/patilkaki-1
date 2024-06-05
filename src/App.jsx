// import { createContext, useMemo, useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import ThemeToggle from './Theme/ThemeToggle';
// import Home from './UI/Home/Home';
// import ResponsiveAppBar from './UI/Home/Navbar/ResponsiveAppBar';


// // Create a context for the color mode
// export const ColorModeContext = createContext({ toggleColorMode: () => { } });
// function App() {
//   const [mode, setMode] = useState('light');

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     []
//   );
//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//         typography: {
//           fontFamily: 'Proxima Nova, sans-serif',
//         },
//       }),
//     [mode]
//   );
//   return (
//     <>

//       <ColorModeContext.Provider value={colorMode}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
           
         
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//     </>
//   )
// }

// export default App
