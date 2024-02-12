import React from 'react';

const Filter = ({ handleSearch, handleRating }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Rechercher par titre" onChange={handleSearch} />
      <select onChange={handleRating}>
        <option value="">Filtrer par note</option>
        <option value="5">5 et plus</option>
        <option value="4">4 et plus</option>
        <option value="3">3 et plus</option>
        <option value="2">2 et plus</option>
        <option value="1">1 et plus</option>
      </select>
    </div>
  );
}

export default Filter;
