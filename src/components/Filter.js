import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
    return (
      <select name={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
    );
  }

export default Filter;
