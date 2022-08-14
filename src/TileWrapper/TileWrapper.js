import React, { Component } from "react";
import Tile from "../Tile/Tile";
import "./TileWrapper.css";

class TileWrapper extends Component {
    constructor(props) {
        super(props);
        this.passTileClick = this.passTileClick.bind(this);
    }

    passTileClick(item) {
        this.props.tileClickHandler(item);
    }

    render() {
        // if the current tab has no Items, the app will break
        // so return now before venturing further into the abyss
        if (
            !Array.isArray(this.props.currItemList) ||
            !this.props.currItemList.length
        ) {
            return <div className="TileWrapper"></div>;
        }

        return (
            <div className="TileWrapper">
                {this.props.currItemList.map((item) => (
                    <Tile
                        itemObject={item}
                        key={item.name}
                        altText={item.name}
                        imgSrc={item.imgSrc}
                        clickHandler={this.passTileClick}
                    />
                ))}
            </div>
        );
    }
}

export default TileWrapper;
