import React, { Component } from "react";
import Main from "../Main/Main";
import { ClosetItem, LookItem } from "../Item";
import ClosetSeeds from "../seeds";

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
        ],
        lookbookTags: [
            "All",
            "Work",
            "Everyday",
            "Outdoors",
            "Special Occasion",
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            closetTags: this.props.closetTags,
            closetItems: this.initializeClosetItems(),
            lookbookTags: this.props.lookbookTags,
            lookbookItems: this.initializeLookbookItems(),
        };
    }

    initializeClosetItems() {
        //temporary array until DB is set up
        let dbClosetItems = ClosetSeeds;

        //total list of closet items by category
        let closet = {};

        // basic "all" filter list
        let allClosetItems = [];

        // go thru DB and add each closet item to the App's list of items
        dbClosetItems.forEach((item) => {
            let closetItem = new ClosetItem(
                item.name,
                item.imgSrc,
                item.tags,
                item.season,
                item.notes,
                item.brand,
                item.size,
                item.price
            );
            allClosetItems.push(closetItem);
        });

        this.props.closetTags.forEach((tag) => {
            let itemList = [];
            allClosetItems.forEach((item) => {
                if (item.tags.includes(tag)) {
                    itemList.push(item);
                }
            });
            closet[tag] = itemList;
        });

        closet["All"] = allClosetItems;
        return closet;
    }

    initializeLookbookItems() {
        //temporary array until DB is set up
        let dbLookbookItems = [];

        //current lookbook items
        let currLookbookItems = [];

        // go thru DB and add each lookbook item to the App's list of items
        dbLookbookItems.forEach((item) => {
            let lookbookItem = new LookItem(
                item.name,
                item.imgSrc,
                item.tags,
                item.season,
                item.notes
            );
            currLookbookItems.push(lookbookItem);
        });

        return currLookbookItems;
    }

    render() {
        return (
            <div className="App">
                <Main
                    tabs={this.props.tabs}
                    closetTags={this.state.closetTags}
                    closetItems={this.state.closetItems}
                    lookbookTags={this.state.lookbookTags}
                    lookbookItems={this.state.lookbookItems}
                />
            </div>
        );
    }
}

export default App;
