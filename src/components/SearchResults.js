import React from "react";

import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results found!</p>;
  } else {
    return (
      <>
        <img
          className="card-image"
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="space"
        />
      </>
    );
  }
};

export default SearchResults;