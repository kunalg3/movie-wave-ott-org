import React, { useState } from 'react';
import { Box, Typography, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MoviePoster = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(`/video/${movie.imdb_id}`)
  }

  return (
    <Box
      className="movie-poster"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ position: 'relative' }}
    >
      <CardMedia
        component="img"
        image={movie.Thumbnail}
        alt={movie.Title}
        sx={{ height: 300, borderRadius: 2 }}
      />
      {hovered && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            p: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">{movie.Title}</Typography>
          <Button variant="outlined" sx={{ mt: 1 }} onClick={handleClick}>
            Click To Play
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MoviePoster;
