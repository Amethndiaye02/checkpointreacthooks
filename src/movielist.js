// MovieList.js
import React from 'react';
import MovieCard from './moviecard';

const MovieList = ({ movies, onWatchTrailer }) => {
  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.title} movie={movie} onWatchTrailer={onWatchTrailer} />
      ))}
    </div>
  );
};

export default MovieList;
