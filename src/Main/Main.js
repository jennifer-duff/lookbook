import React, { Component } from "react";
import "./Main.css";
import Header from "../Header/Header.js";
import FilterRow from "../FilterRow/FilterRow";
import TileWrapper from "../TileWrapper/TileWrapper";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.tabs[0],
            activeFilter: this.props.closetTags[0],
            currTags: this.props.closetTags,
            allItems: this.props.closetItems,
            currItems: this.props.closetItems["All"],
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
        this.handleFilterSwitch = this.handleFilterSwitch.bind(this);
    }

    handleTabSwitch(tab) {
        let currTags, activeFilter, currItems, allItems;
        if (tab === "Closet") {
            currTags = this.props.closetTags;
            activeFilter = this.props.closetTags[0];
            currItems = this.props.closetItems["All"];
            allItems = this.props.closetItems;
        } else {
            currTags = this.props.lookbookTags;
            activeFilter = this.props.lookbookTags[0];
            currItems = this.props.lookbookItems["All"];
            allItems = this.props.lookbookItems;
        }
        this.setState({
            activeTab: tab,
            activeFilter: activeFilter,
            currTags: currTags,
            currItems: currItems,
            allItems: allItems,
        });
    }

    handleFilterSwitch(filter) {
        this.setState({
            activeFilter: filter,
            currItems: this.state.allItems[filter],
        });
    }

    render() {
        console.log(this.state.currItems);
        return (
            <div className="Main">
                <Header
                    tabs={this.props.tabs}
                    activeTab={this.state.activeTab}
                    handleTabSwitch={this.handleTabSwitch}
                />
                <FilterRow
                    tagList={this.state.currTags}
                    currItems={this.state.currItems}
                    activeFilter={this.state.activeFilter}
                    handleFilterSwitch={this.handleFilterSwitch}
                />
                <TileWrapper currItems={this.state.currItems} />
            </div>
        );
    }
}

export default Main;
