import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        console.log(`${evt.target} was clicked!`);
    }

    handleDrag(evt) {
        console.log(`${evt.target} was dragged!`);
    }

    render() {
        return (
            <div className="Tile">
                <img
                    className="Tile-Img"
                    src={this.props.imgSrc}
                    alt={this.props.altText}
                />
            </div>
        );
    }
}

export default Tile;
