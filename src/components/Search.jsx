import React from "react";

function Search({ value, onChangeSearch }) {
  function handleChange(event) {
    onChangeSearch(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;