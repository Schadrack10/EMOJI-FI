import React, { useState, useContext } from "react";
import { WebContext } from "@/context/WebContext";

const Search = () => {
  const { filterTerm, setFilterTerm } = useContext(WebContext);

  return (
    <input
      className="searchInput"
      value={filterTerm}
      onChange={(e) => setFilterTerm(e.target.value)}
      placeholder="Find your emoji"
    />
  );
};

export default Search;
