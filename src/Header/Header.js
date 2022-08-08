import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    // static defaultProps = {
    //     tabs: ["Closet", "Lookbook"],
    // };

    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
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

    render() {
        return (
            <nav className="Header">
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
                <button
                    className="Header-Menu-Btn"
                    onClick={this.handleMenuClick}
                ></button>
            </nav>
        );
    }
}

export default Header;
