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
            currItems: this.props,
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
        this.handleFilterSwitch = this.handleFilterSwitch.bind(this);
    }

    handleTabSwitch(tab) {
        let tags, activeFilter, items;
        if (tab === "Closet") {
            tags = this.props.closetTags;
            activeFilter = this.props.closetTags[0];
            items = this.props.closetItems;
        } else {
            tags = this.props.lookbookTags;
            activeFilter = this.props.lookbookTags[0];
            items = this.props.lookbookItems;
        }
        this.setState({
            activeTab: tab,
            activeFilter: activeFilter,
            currTags: tags,
            currItems: items
        });
    }

    handleFilterSwitch(filter) {
        this.setState({
            activeFilter: filter,
        });
    }

    render() {
        return (
            <div className="Main">
                <Header
                    tabs={this.props.tabs}
                    activeTab={this.state.activeTab}
                    handleTabSwitch={this.handleTabSwitch}
                />
                <FilterRow
                    tagList={this.state.currTags}
                    activeFilter={this.state.currFilter}
                    handleFilterSwitch={this.handleFilterSwitch}
                />
                <TileWrapper />
            </div>
        );
    }
}

export default Main;
