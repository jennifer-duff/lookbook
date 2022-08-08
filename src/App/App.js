import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import FilterRow from "../FilterRow/FilterRow";
import TileWrapper from "../TileWrapper/TileWrapper";
import {ClosetItem, LookItem} from "../Item";

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
            closetItems: this.initializeClosetItems(),
            lookbookTags: this.props.lookbookTags,
            lookbookFilterImgs: this.props.lookbookFilterImgs,
            lookbookItems: this.initializeLookbookItems(),

            activeTab: "Closet",
            tags: this.props.closetTags,
            currFilter: "All",
            filterImgs: [],
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
        this.handleFilterSwitch = this.handleFilterSwitch.bind(this);
    }

    initializeClosetItems(){
        //temporary array until DB is set up
        let dbClosetItems = [];

        //current closet items
        let currClosetItems = [];

        // go thru DB and add each closet item to the App's list of items
        dbClosetItems.forEach(item => {
            let closetItem = new ClosetItem(item.name, item.imgSrc, item.tags, item.season, item.notes, item.brand, item.size, item.price);
            currClosetItems.push(closetItem);
        })

        return currClosetItems;
    }

    initializeLookbookItems(){
        //temporary array until DB is set up
        let dbLookbookItems = [];

        //current lookbook items
        let currLookbookItems = [];

        // go thru DB and add each lookbook item to the App's list of items
        dbLookbookItems.forEach(item => {
            let lookbookItem = new LookItem(item.name, item.imgSrc, item.tags, item.season, item.notes);
            currLookbookItems.push(lookbookItem);
        })

        return currLookbookItems;
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
