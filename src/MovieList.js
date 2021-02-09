import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(evt) {
    this.setState({
      searchTerm: evt.target.value,
    });
  }
  render() {
    const {
      movies,
      addToWatchList,
      caption,
      showSearch,
      showWatchList,
      toggleSidebar,
    } = this.props;
    const { searchTerm } = this.state;
    const searchedMovies = movies.filter(
      (m) =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!showSearch || searchTerm || showWatchList)
    );
    return (
      <section className="MovieList">
        {(showSearch || showWatchList) && (
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleInput}
            placeholder="Search Movies..."
          ></input>
        )}
        {(!showSearch || searchTerm || showWatchList) && (
          <h1 className="title">{caption}</h1>
        )}
        {(!showSearch || searchTerm || showWatchList) && (
          <div className="movieContainer">
            {searchedMovies.length > 0 ? (
              searchedMovies.map((movie) => (
                <MovieCard
                  key={movie.title}
                  {...movie}
                  addToWatchList={addToWatchList}
                  toggleSidebar={toggleSidebar}
                />
              ))
            ) : (
              <div className="no-movies">NO MOVIES FOUND</div>
            )}
            {}
          </div>
        )}
      </section>
    );
  }
}

export default MovieList;
