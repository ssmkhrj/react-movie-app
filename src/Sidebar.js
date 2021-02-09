import React, { Component } from "react";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export default class Sidebar extends Component {
  render() {
    const { movie, isSidebarOpen, toggleSidebar, addToWatchList } = this.props;
    const {
      title,
      genre_ids,
      inWatchList,
      overview,
      release_date,
      trailer,
    } = movie;
    return (
      <aside
        className="Sidebar"
        style={{
          transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {title && (
          <>
            <div className="iframe-container">
              <iframe
                title={title}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <section className="Sidebar-content">
              <div className="Sidebar-genre-container">
                {genre_ids.map((g) => (
                  <div key={g}>{genreMap[g]}</div>
                ))}
              </div>
              <div className="Sidebar-title">{title}</div>
              <p className="Sidebar-desc">{overview}</p>
              <div className="Sidebar-date">{release_date}</div>
              <div className="Sidebar-button-container">
                <button
                  className="Sidebar-button-close"
                  onClick={() => toggleSidebar(false, {})}
                >
                  ×
                </button>
                <button
                  className="Sidebar-button"
                  onClick={() => addToWatchList(title)}
                >
                  {inWatchList ? "Remove From WatchList" : "Add To WatchList"}
                </button>
              </div>
            </section>
          </>
        )}
      </aside>
    );
  }
}
