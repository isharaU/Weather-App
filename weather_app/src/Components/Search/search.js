import "./search.css";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(null);
  const filterData = () => {};

  return (
    <div class="searchBar">
      <input
        className="searchInput"
        type="search"
        placeholder="Enter a City"
        value={searchInput}
        // event listner
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={filterData} className="button">
        Add City
      </button>
    </div>
  );
};

export default SearchBar;
