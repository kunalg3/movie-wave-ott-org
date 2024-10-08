import React from 'react';
import MovieSection from '../components/MovieSection';
import Banner from '../components/Banner';
import AppBarComponent from '../components/AppBarComponent';
import movies from '../data/movies';
import { Container } from '@mui/material';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBarComponent />
      <Container>
        <Banner/>
        <MovieSection title="Trending Now" movies={movies.slice(0, 6)} />
        <MovieSection title="Watch Again" movies={movies.slice(6, 12)} />
      </Container>
      <Footer/>
    </div>
  );
};

export default HomePage;
