import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import MovieSection from './components/MovieSection';
import movies from './data/movies'; // Assume you have a movies array with movie data
import HomePage from './pages/HomePage';
import Banner from './components/Banner';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141414',  // Netflix-like background color
    },
    primary: {
      main: '#43e8fc',  // Netflix-like red
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomePage/>
    </ThemeProvider>
  );
};

export default App;
