

// Create a context for the color mode
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
