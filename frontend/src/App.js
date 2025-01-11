import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import VideoEmbed from './components/VideoEmbed';
import Search from './pages/SearchPage';
import ErrorPage from './pages/ErrorPage';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import Test from './pages/Test';

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

// Set base URL based on environment
const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000'
  : 'https://movie-wave-ott-org.onrender.com';

axios.defaults.baseURL= baseURL;
axios.defaults.withCredentials=true;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Toaster position='top-center' toastOptions={{duration:2000}}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/video/:id' element={<VideoEmbed/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
