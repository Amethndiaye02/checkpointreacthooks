// App.js
import React, { useState } from 'react';
import MovieList from './movielist';
import Filter from './Filter';
import { moviesData } from './moviesdata';

const App = () => {
  const [movies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRating = (event) => {
    setMinRating(event.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!minRating || movie.rating >= minRating)
    );
  });

  return (
    <div className="app">
      <Filter handleSearch={handleSearch} handleRating={handleRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

