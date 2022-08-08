import React, { Component } from "react";
import "./FilterBtn.css";

class FilterBtn extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        console.log(`Clicked on ${this.props.tag}!`);
        this.props.changeFilter(this.props.tag);
    }

    render() {
        return (
            <div className={this.props.btnClass} onClick={this.handleClick}>
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
