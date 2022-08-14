import React, { Component } from "react";
import "./InfoBox.css";

class InfoBox extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // let item = this.props.item;
        // let value = this.props.propertyName;
        // let tag = item.value;
        // console.log(tag);
        return (
            <div className="InfoBox">
                <p className="InfoBox-Label">{this.props.propertyName}</p>
                <p className="InfoBox-Tag">{this.props.propertyValue}</p>
            </div>
        );
    }
}

export default InfoBox;
