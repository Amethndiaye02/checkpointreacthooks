

// MovieCard.js
import React from 'react';

const MovieCard = ({ movie, onWatchTrailer }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-rating">Rating: {movie.rating}</p>
        <button className="watch-trailer" onClick={() => onWatchTrailer(movie)}>Watch Trailer</button>
      </div>
    </div>
  );
};

export default MovieCard;
