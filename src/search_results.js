import React from 'react';
import ReactDOM from 'react-dom';

class SearchResults extends React.component {
  constructor(props) {
      super(props);
    }

  this.handleAddMoviestoQueue = this.handleAddMoviestoQueue.bind(this);

  render() {
    return (
      <div>
        <div>
        <h3>{currentMovie.title}</h3>
          <div>{currentMovie.poster_path}</div>
          <div>{currentMovie.tagline}</div>
          <div>{currentMovie.overview}</div>
          <div>Length: {currentMovie.runtime}</div>
          <div>Voting: {currentMovie.vote}</div>
        </div>
      </div>
    );
  }
}

export default SearchResultsDisplay;
