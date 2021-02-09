import React, { Component } from "react";
import GenreChip from "./GenreChip";

class PopularMoviesCard extends Component {
    static defaultProps = {
        genreMap: {
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
        },
    };
    render() {
        const {
            title,
            poster_path,
            genre_ids,
            vote_average,
            inWatchList,
            genreMap,
            addToWatchList,
            toggleSidebar
        } = this.props;
        const imgURL = `https://image.tmdb.org/t/p/w154${poster_path}`;
        return (
            
                <div className="root" onClick={() => toggleSidebar(true, title)}>
                    <img src={imgURL} alt={title} />
                    <button
                        className="wishlistBtn"
                        style={{ opacity: inWatchList ? 1 : 0.3 }}
                        onClick={() =>
                            addToWatchList(title)
                        }
                    >
                        <i className="fas fa-heart"></i>
                    </button>
                    <div className="info">
                        <div>{title}</div>
                        <div style={{ fontWeight: 400, fontSize: 9, marginBottom: 5 }}>
                            Rating: {vote_average}/10
          </div>
                        <div>
                            {genre_ids.map((g) => (
                                <GenreChip key={g} genre={genreMap[g]} />
                            ))}
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default PopularMoviesCard;
