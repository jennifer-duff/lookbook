import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        console.log(`${this.props.itemObject.name} was clicked!`);
        this.props.clickHandler(this.props.itemObject);
    }

    handleDrag(evt) {
        console.log(`${evt.target} was dragged!`);
    }

    render() {
        return (
            <div className="Tile" onClick={this.handleClick}>
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
