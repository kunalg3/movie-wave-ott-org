import React from 'react';
import { Typography, Box } from '@mui/material';
import MoviePoster from './MoviePoster';
import './MovieSection.css'; // Add custom styles for horizontal scroll
import { Link, useNavigate } from 'react-router-dom';

const MovieSection = ({ title, movies }) => {
  
  // const navigate=useNavigate();
  // const handleMovieClick=(movie)=>{
  //   <Link to ='/video/${movie.imdb_id}'/>
  //   console.log("clicked movie");
  // }

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box className="movie-section">
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie}/>
        ))}
      </Box>
    </Box>
  );
};

export default MovieSection;
