import React, { Component } from "react";

export default class GenreChip extends Component {
    render() {
        const { genre } = this.props;
        const style = {
            color: "#192133",
            background: "#ffffff",
            fontWeight: 600,
            fontSize: 7,
            padding: "2px 10px",
            display: "inline-block",
            margin: "2px 4px 2px 0",
            borderRadius: 100,
        };
        return <div style={style}>{genre}</div>;
    }
}
