import React, { Component } from "react";
import "./Main.css";
import Header from "../Header/Header.js";
import FilterRow from "../FilterRow/FilterRow";
import TileWrapper from "../TileWrapper/TileWrapper";
import ItemDetails from "../ItemDetails/ItemDetails";

class Main extends Component {
    static defaultProps = {
        Views: ["AllItems", "ItemDetails", "EditItem"],
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.tabs[0],
            activeFilter: this.props.closetTags[0],
            currFilterImgs: this.props.closetFilterImgs,
            currTags: this.props.closetTags,
            allItems: this.props.closetItems,
            currItemList: this.props.closetItems["All"],
            currView: "AllItems",
            currItem: null,
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
        this.handleFilterSwitch = this.handleFilterSwitch.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        this.handleBackClick = this.hanldeBackClick.bind(this);
    }

    handleTabSwitch(tab) {
        let currTags, activeFilter, currItems, allItems, currFilterImgs;
        if (tab === "Closet") {
            currTags = this.props.closetTags;
            activeFilter = this.props.closetTags[0];
            currItems = this.props.closetItems["All"];
            allItems = this.props.closetItems;
            currFilterImgs = this.props.closetFilterImgs;
        } else {
            currTags = this.props.lookbookTags;
            activeFilter = this.props.lookbookTags[0];
            currItems = this.props.lookbookItems["All"];
            allItems = this.props.lookbookItems;
            currFilterImgs = this.props.lookbookFilterImgs;
        }
        this.setState({
            activeTab: tab,
            activeFilter: activeFilter,
            currTags: currTags,
            currItems: currItems,
            allItems: allItems,
            currFilterImgs: currFilterImgs,
        });
    }

    handleFilterSwitch(filter) {
        let currFilterImgs =
            this.state.activeTab === "Closet"
                ? this.props.closetFilterImgs
                : this.props.lookbookFilterImgs;
        this.setState({
            activeFilter: filter,
            currItems: this.state.allItems[filter],
            currFilterImgs: currFilterImgs,
        });
    }

    handleTileClick(tileItem) {
        this.setState({
            currView: "ItemDetails",
            currItem: tileItem,
        });
    }

    hanldeBackClick() {
        this.setState({
            currView: "AllItems",
            currItem: null,
        });
    }

    render() {
        let Body;
        switch (this.state.currView) {
            case "AllItems":
                Body = (
                    <div className="Main-Body">
                        <FilterRow
                            tagList={this.state.currTags}
                            currItems={this.state.currItemList}
                            activeFilter={this.state.activeFilter}
                            currFilterImgs={this.state.currFilterImgs}
                            handleFilterSwitch={this.handleFilterSwitch}
                        />
                        <TileWrapper
                            currItems={this.state.currItemList}
                            tileClickHandler={this.handleTileClick}
                        />
                    </div>
                );
                break;
            case "ItemDetails":
                Body = (
                    <div className="Main-Body">
                        <ItemDetails item={this.state.currItem} />
                    </div>
                );
                break;
            default:
                Body = <div className="Main-Body"> Something went wrong!</div>;
        }

        return (
            <div className="Main">
                <Header
                    currView={this.state.currView}
                    tabs={this.props.tabs}
                    activeTab={this.state.activeTab}
                    handleTabSwitch={this.handleTabSwitch}
                    handleBackClick={this.handleBackClick}
                />
                {Body}
                {/* <FilterRow
                    tagList={this.state.currTags}
                    currItems={this.state.currItems}
                    activeFilter={this.state.activeFilter}
                    currFilterImgs={this.state.currFilterImgs}
                    handleFilterSwitch={this.handleFilterSwitch}
                />
                <TileWrapper
                    currItems={this.state.currItems}
                    tileClickHandler={this.handleTileClick}
                /> */}
            </div>
        );
    }
}

export default Main;
