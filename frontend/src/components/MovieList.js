import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import movies from '../data/movies';

const MovieList = () => {
  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
