import React, { Component } from "react";
import Tile from "../Tile/Tile";
import "./TileWrapper.css";

class TileWrapper extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // if the current tab has no Items, the app will break
        // so return now before venturing further into the abyss
        if (
            !Array.isArray(this.props.currItems) ||
            !this.props.currItems.length
        ) {
            return <div className="TileWrapper"></div>;
        }

        return (
            <div className="TileWrapper">
                {this.props.currItems.map((item) => (
                    <Tile
                        itemObject={item}
                        key={item.name}
                        altText={item.name}
                        imgSrc={item.imgSrc}
                    />
                ))}
            </div>
        );
    }
}

export default TileWrapper;
