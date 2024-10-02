import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <img src={movie.poster} alt={movie.title} style={{ width: '300px' }} />
      <h1>{movie.title}</h1>
      <p>Description for {movie.title} will go here.</p>
    </div>
  );
};

export default MovieDetailsPage;
