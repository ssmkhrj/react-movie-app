import React, { Component } from "react";
import moviedata from "./moviedata";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

class App extends Component {
  static defaultProps = {
    randomCover: Math.floor(Math.random() * moviedata.length),
  };
  constructor() {
    super();
    this.state = {
      movies: moviedata,
      isWatchListOpen: false,
      isSidebarOpen: false,
      currentMovie: {},
    };
    this.addToWatchList = this.addToWatchList.bind(this);
    this.toggleWatchList = this.toggleWatchList.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar(val, movie) {
    this.setState((currSt) => ({
      isSidebarOpen: val,
      currentMovie: movie,
    }));
  }
  toggleWatchList(val) {
    this.setState((currSt) => ({
      isWatchListOpen: val,
    }));
  }
  addToWatchList(movie) {
    // console.log(this.state.movies.filter(m => m.title === movie))
    this.setState((currSt) => ({
      movies: currSt.movies.map((m) =>
        m.title === movie ? { ...m, inWatchList: !m.inWatchList } : m
      ),
    }));
  }
  render() {
    const { movies, isWatchListOpen, isSidebarOpen, currentMovie } = this.state;
    const randomMovie = movies[this.props.randomCover];
    const coverURL = `https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path}`;
    const style = {
      background: `linear-gradient(#19213333, #192133), url(${coverURL}) top center`,
    };
    return (
      <div>
        <Sidebar
          movie={
            currentMovie.length !== undefined
              ? movies.filter((m) => m.title === currentMovie)[0]
              : {}
          }
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={this.toggleSidebar}
          addToWatchList={this.addToWatchList}
        />
        <Navbar toggleWatchList={this.toggleWatchList} />
        {isWatchListOpen ? (
          <MovieList
            showWatchList
            movies={movies.filter((m) => m.inWatchList)}
            caption="Your Watchlist"
            addToWatchList={this.addToWatchList}
            toggleSidebar={this.toggleSidebar}
          />
        ) : (
          <>
            <header className="Header" style={style}>
              {randomMovie.title}
            </header>

            <MovieList
              showSearch
              caption="Search Results"
              movies={movies}
              addToWatchList={this.addToWatchList}
              toggleSidebar={this.toggleSidebar}
            />

            <MovieList
              caption="Popular Movies"
              movies={movies.slice(12, 24)}
              addToWatchList={this.addToWatchList}
              toggleSidebar={this.toggleSidebar}
            />

            <MovieList
              showSearch={false}
              caption="Now Playing"
              movies={[
                ...movies.slice(12, 16),
                movies[22],
                ...movies.slice(24),
              ]}
              addToWatchList={this.addToWatchList}
              toggleSidebar={this.toggleSidebar}
            />

            <MovieList
              caption="Top Rated"
              movies={movies.slice(0, 12)}
              addToWatchList={this.addToWatchList}
              toggleSidebar={this.toggleSidebar}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
