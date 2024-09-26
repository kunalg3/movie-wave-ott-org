import React from 'react';
import { CssBaseline, Container, Grid, Typography } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import MovieCard from './components/MovieCard';
import movies from './data/movies'; // Assume you have a movies array with movie data

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarComponent />
      <Container>
        <Typography variant="h4" sx={{ my: 4 }}>
          Browse Movies & Series
        </Typography>
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
