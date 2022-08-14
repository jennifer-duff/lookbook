import React, { Component } from "react";
import "./AddBtn.css";
import PlusIcon from "../_assets/plusIcon.svg";

class AddBtn extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        console.log("ADDING ITEM!");
        this.props.clickHandler();
    }

    render() {
        return (
            <button className="AddBtn" onClick={this.handleBtnClick}>
                <img className="AddBtn-Img" src={PlusIcon} alt="Add Item" />
            </button>
        );
    }
}

export default AddBtn;
