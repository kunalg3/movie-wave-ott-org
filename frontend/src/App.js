import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import MovieSection from './components/MovieSection';
import movies from './data/movies'; // Assume you have a movies array with movie data

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141414',  // Netflix-like background color
    },
    primary: {
      main: '#e50914',  // Netflix-like red
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
      <AppBarComponent />
      <Container>
        {/* Pass movies and other section titles */}
        <MovieSection title="Trending Now" movies={movies.slice(0, 5)} />
        <MovieSection title="Watch Again" movies={movies.slice(5, 10)} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
