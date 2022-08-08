import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import FilterRow from "../FilterRow/FilterRow";

class App extends Component {
    static defaultProps = {
        tabs: ["Closet", "Lookbook"],
        closetTags: [
            "All",
            "Tops",
            "Bottoms",
            "Outerwear",
            "Shoes",
            "Bags",
            "Accessories",
            "Edit Filters",
        ],
        lookbookTags: [
            "All",
            "Work",
            "Everyday",
            "Outdoors",
            "Special Occasion",
            "Edit Filters",
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.tabs[0],
            closetTags: [
                "All",
                "Tops",
                "Bottoms",
                "Outerwear",
                "Shoes",
                "Bags",
                "Accessories",
                "Edit Filters",
            ],
            closetFilter: "All",
            closetFilterImgs: [],
            lookbookTags: [
                "All",
                "Work",
                "Everyday",
                "Outdoors",
                "Special Occasion",
                "Edit Filters",
            ],
            lookbookFilter: "All",
            lookbookFilterImgs: [],
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
    }

    handleTabSwitch(tab) {
        this.setState({
            activeTab: tab,
        });
    }

    render() {
        return (
            <div className="App">
                <Header
                    activeTab={this.state.activeTab}
                    handleTabSwitch={this.handleTabSwitch}
                    tabs={this.props.tabs}
                />
                {this.state.activeTab === this.props.tabs[0] && (
                    <FilterRow
                        tagList={this.state.closetTags}
                        filterImgs={this.state.closetFilterImgs}
                        activeFilter={this.state.closetFilter}
                    />
                )}
                {this.state.activeTab === this.props.tabs[1] && (
                    <FilterRow
                        tagList={this.state.lookbookTags}
                        filterImgs={this.state.lookbookFilterImgs}
                        activeFilter={this.state.lookbookFilter}
                    />
                )}
            </div>
        );
    }
}

export default App;
