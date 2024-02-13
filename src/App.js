// App.js
import React, { useState } from 'react';
import MovieList from './movielist';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movieData = [
    { 
      title: "Baabel",
      description: "Description for Baabel.",
      posterURL: "https://example.com/baabel-poster.jpg",
      rating: "8.5",
      trailerURL: "https://www.youtube.com/embed/BaabelTrailer"
    },
    { 
      title: "Saneex & Locataires",
      description: "Description for Saneex & Locataires.",
      posterURL: "https://example.com/saneex-poster.jpg",
      rating: "7.9",
      trailerURL: "https://www.youtube.com/embed/SaneexTrailer"
    }
  ];

  const handleWatchTrailer = (movie) => {
    setSelectedMovie(movie);
    setShowDetails(true);
  };

  const handleBack = () => {
    setShowDetails(false);
  };

  return (
    <div>
      <h1>Movie App</h1>
      {!showDetails ? (
        <MovieList movies={movieData} onWatchTrailer={handleWatchTrailer} />
      ) : (
        <div>
          <button onClick={handleBack}>Back</button>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.description}</p>
          <iframe width="560" height="315" src={selectedMovie.trailerURL} title="trailer" allowFullScreen />
        </div>
      )}
    </div>
  );
};

export default App;
