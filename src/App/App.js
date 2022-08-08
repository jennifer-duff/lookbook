import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import FilterRow from "../FilterRow/FilterRow";
import TileWrapper from "../TileWrapper/TileWrapper";

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
        closetFilterImgs: [],
        lookbookTags: [
            "All",
            "Work",
            "Everyday",
            "Outdoors",
            "Special Occasion",
            "Edit Filters",
        ],
        lookbookFilterImgs: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            closetTags: this.props.closetTags,
            closetFilterImgs: this.props.closetFilterImgs,
            lookbookTags: this.props.lookbookTags,
            lookbookFilterImgs: this.props.lookbookFilterImgs,

            activeTab: "Closet",
            tags: this.props.closetTags,
            currFilter: "All",
            filterImgs: [],
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
        this.handleFilterSwitch = this.handleFilterSwitch.bind(this);
    }

    handleTabSwitch(tab) {
        let tags, currFilter, filterImgs;
        if (tab === "Closet") {
            tags = this.state.closetTags;
            currFilter = this.state.closetTags[0];
            filterImgs = this.state.closetFilterImgs;
        } else {
            tags = this.props.lookbookTags;
            currFilter = this.props.lookbookTags[0];
            filterImgs = this.props.lookbookFilterImgs;
        }
        this.setState({
            activeTab: tab,
            tags: tags,
            currFilter: currFilter,
            filterImgs: filterImgs,
        });
    }

    handleFilterSwitch(filter) {
        this.setState({
            currFilter: filter,
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
                <FilterRow
                    tagList={this.state.tags}
                    filterImgs={this.state.filterImgs}
                    activeFilter={this.state.currFilter}
                    handleFilterSwitch={this.handleFilterSwitch}
                />
                <TileWrapper />
            </div>
        );
    }
}

export default App;
