import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        const homeBtnStyles = {
            background: "none",
            outline: "none",
            border: "none",
            color: "cyan",
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: 25,
            cursor: "pointer"
        }
        const watchBtnStyles = {
            background: "none",
            outline: "none",
            border: "none",
            color: "#6686cc",
            fontFamily: "inherit",
            fontWeight: 400,
            fontSize: 20,
            cursor: "pointer"
        }
        return (
            <nav className="Navbar">
                <div className="Navbar-container">
                    <button style={homeBtnStyles} onClick={() => this.props.toggleWatchList(false)}>reactFlix</button>
                    <button style={watchBtnStyles} onClick={() => this.props.toggleWatchList(true)}>Watchlist</button>
                </div>
            </nav>
        );
    }
}
