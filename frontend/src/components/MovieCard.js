import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Snackbar } from '@mui/material';

const MovieCard = ({ movie }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleWatchlist = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={movie.poster}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleWatchlist}>Add to Watchlist</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Added to Watchlist"
      />
    </>
  );
};

export default MovieCard;
