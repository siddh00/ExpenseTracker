import React from "react";

function FilterSortBar({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <div className="filter-bar">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort</option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}

export default FilterSortBar;
