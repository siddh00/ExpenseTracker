import React from "react";

function SearchBar({ query, onSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by title or category..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
