import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event.target.value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
