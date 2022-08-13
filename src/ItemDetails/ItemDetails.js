import React, { Component } from "react";
import "./ItemDetails.css";

class ItemDetails extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="ItemDetails">
                <div className="ItemDetails-ImgHolder">
                    <img
                        className="ItemDetails-Img"
                        src={this.props.item.imgSrc}
                        alt={this.props.item.name}
                    />
                </div>
            </div>
        );
    }
}

export default ItemDetails;
