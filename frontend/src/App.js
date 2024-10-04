import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
