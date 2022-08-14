import React, { Component } from "react";
import "./Main.css";
import Header from "../Header/Header.js";
import FilterRow from "../FilterRow/FilterRow";
import TileWrapper from "../TileWrapper/TileWrapper";
import ItemDetails from "../ItemDetails/ItemDetails";
import AddBtn from "../AddBtn/AddBtn";

class Main extends Component {
    static defaultProps = {
        Views: ["AllItems", "ItemDetails", "AddItem", "EditItem"],
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
        this.handleBackClick = this.handleBackClick.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleTabSwitch(tab) {
        let currTags, activeFilter, currItemList, allItems, currFilterImgs;
        if (tab === "Closet") {
            currTags = this.props.closetTags;
            activeFilter = this.props.closetTags[0];
            currItemList = this.props.closetItems["All"];
            allItems = this.props.closetItems;
            currFilterImgs = this.props.closetFilterImgs;
        } else {
            currTags = this.props.lookbookTags;
            activeFilter = this.props.lookbookTags[0];
            currItemList = this.props.lookbookItems["All"];
            allItems = this.props.lookbookItems;
            currFilterImgs = this.props.lookbookFilterImgs;
        }
        this.setState({
            activeTab: tab,
            activeFilter: activeFilter,
            currTags: currTags,
            currItemList: currItemList,
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
            currItemList: this.state.allItems[filter],
            currFilterImgs: currFilterImgs,
        });
    }

    handleTileClick(tileItem) {
        this.setState({
            currView: "ItemDetails",
            currItem: tileItem,
        });
    }

    handleBackClick() {
        this.setState({
            currView: "AllItems",
            currItem: null,
        });
    }

    addItem() {
        this.setState({
            currView: "AddItem",
            currItem: null,
        });
    }

    renderBody() {
        let Body;
        switch (this.state.currView) {
            case "AllItems":
                Body = (
                    <div className="Main-Body">
                        <FilterRow
                            tagList={this.state.currTags}
                            activeFilter={this.state.activeFilter}
                            currFilterImgs={this.state.currFilterImgs}
                            handleFilterSwitch={this.handleFilterSwitch}
                        />
                        <TileWrapper
                            currItemList={this.state.currItemList}
                            tileClickHandler={this.handleTileClick}
                        />
                        <AddBtn
                            activeTab={this.props.activeTab}
                            clickHandler={this.addItem}
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
        return Body;
    }

    render() {
        return (
            <div className="Main">
                <Header
                    currView={this.state.currView}
                    tabs={this.props.tabs}
                    activeTab={this.state.activeTab}
                    handleTabSwitch={this.handleTabSwitch}
                    handleBackClick={this.handleBackClick}
                />
                {this.renderBody()}
            </div>
        );
    }
}

export default Main;
