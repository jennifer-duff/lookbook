import React, { Component } from "react";
import "./FilterBtn.css";

class FilterBtn extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleClick(evt) {
        console.log(`Clicked on ${evt.target.className}!`);
    }

    render() {
        return (
            <div className={this.props.btnClass}>
                <div className="FilterBtn-Circle">
                    {this.props.imgSrc !== "" && (
                        <img
                            className="FilterBtn-Img"
                            src={this.props.imgSrc}
                            alt={this.props.altText}
                        />
                    )}
                </div>
                <p className="FilterBtn-Label">{this.props.tag}</p>
            </div>
        );
    }
}

export default FilterBtn;
