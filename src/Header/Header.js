import React, { Component } from "react";
import BackBtn from "../BackBtn/BackBtn";
import "./Header.css";

class Header extends Component {
    // static defaultProps = {
    //     tabs: ["Closet", "Lookbook"],
    // };

    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    handleTabClick(evt) {
        let parent = evt.target.parentNode;
        let children = parent.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.toggle("Header-NavLink-Active");
        }
        this.props.handleTabSwitch(evt.target.innerHTML);
    }

    handleMenuClick(evt) {
        console.log(`Clicked on ${evt.target.className}!`);
    }

    goBack() {
        this.props.handleBackClick();
    }

    generateBtns(currView) {
        switch (currView) {
            case "AllItems":
                return (
                    <div className="Header-NavLinks-Wrapper">
                        {this.props.tabs.map((tab) => (
                            <button
                                className={
                                    this.props.activeTab === tab
                                        ? "Header-NavLink Header-NavLink-Active"
                                        : "Header-NavLink"
                                }
                                key={tab}
                                onClick={this.handleTabClick}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                );

            case "ItemDetails":
                return (
                    <div className="Header-NavLinks-Wrapper">
                        <BackBtn clickHandler={this.goBack} />
                        <button className="Header-NavLink Header-NavLink-Active Header-PageTitle">
                            Item Details
                        </button>
                    </div>
                );
            default:
                break;
        }
    }

    render() {
        return (
            <nav className="Header">
                {/* <div className="Header-NavLinks-Wrapper">
                    {this.props.tabs.map((tab) => (
                        <button
                            className={
                                this.props.activeTab === tab
                                    ? "Header-NavLink Header-NavLink-Active"
                                    : "Header-NavLink"
                            }
                            key={tab}
                            onClick={this.handleTabClick}
                        >
                            {tab}
                        </button>
                    ))}
                </div>                    */}
                {this.generateBtns(this.props.currView)}
                <div className="Header-Menu-Btns-Wrapper">
                    {this.props.currView === "ItemDetails" && (
                        <button className="Header-Edit-Btn"></button>
                    )}
                    {(this.props.currView === "AddItem" ||
                        this.props.currView === "EditItem") && (
                        <button className="Header-Save-Btn"></button>
                    )}
                    <button
                        className="Header-Menu-Btn"
                        onClick={this.handleMenuClick}
                    ></button>
                </div>
            </nav>
        );
    }
}

export default Header;
