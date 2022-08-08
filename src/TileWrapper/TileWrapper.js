import React, { Component } from "react";
import Tile from "../Tile/Tile";
import "./TileWrapper.css";

class TileWrapper extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="TileWrapper">
                {/* {this.props.currItems.map((item) => (
                    <Tile
                        itemObject={item}
                        key={item.name}
                        altText={item.name}
                        imgSrc={item.imgSrc}
                    />
                ))} */}
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        );
    }
}

export default TileWrapper;
