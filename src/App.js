// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search-bar-container">
      <SearchBar onSearch={setSearchTerm} />
    </div>
  );
}

export default App;
