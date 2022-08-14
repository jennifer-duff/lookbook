import React, { Component } from "react";
import BackArrow from "../_assets/BackArrow.svg";
import "./BackBtn.css";

class BackBtn extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        this.props.clickHandler();
    }

    render() {
        return (
            <button className="BackBtn" onClick={this.handleBtnClick}>
                <img className="BackBtn-Img" src={BackArrow} alt="Go back" />
            </button>
        );
    }
}

export default BackBtn;
