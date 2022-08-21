import React, { Component } from "react";
import Main from "../Main/Main";
import { ClosetItem, LookbookItem } from "../Item";
import ClosetSeeds from "../seeds";
// import mongoose from "mongoose";
// import connectToDB from "../dbConnect";

class App extends Component {
    static defaultProps = {
        tabs: ["Closet", "Lookbook"],
        closetTags: [
            "All",
            "Outerwear",
            "Tops",
            "Bottoms",
            "Shoes",
            "Bags",
            "Accessories",
        ],
        lookbookTags: [
            "All",
            "Work",
            "Travel",
            "Everyday",
            "Outdoors",
            "Special Occasion",
        ],
    };

    constructor(props) {
        super(props);
        let closetItems = this.initializeClosetItems();
        let lookbookItems = this.initializeLookbookItems();
        let closetFilterImgs = this.initializeFilterImgs(
            this.props.closetTags,
            closetItems
        );
        let lookbookFilterImgs = this.initializeFilterImgs(
            this.props.lookbookTags,
            lookbookItems
        );

        this.state = {
            closetTags: this.props.closetTags,
            closetItems: closetItems,
            closetFilterImgs: closetFilterImgs,
            lookbookTags: this.props.lookbookTags,
            lookbookItems: lookbookItems,
            lookbookFilterImgs: lookbookFilterImgs,
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

        //total list of Lookbook items by category
        let Lookbook = {};

        // basic "all" filter list
        let allLookbookItems = [];

        // go thru DB and add each Lookbook item to the App's list of items
        if (dbLookbookItems.length !== 0) {
            dbLookbookItems.forEach((item) => {
                let LookItem = new LookbookItem(
                    item.name,
                    item.imgSrc,
                    item.tags,
                    item.season,
                    item.notes
                );
                allLookbookItems.push(LookItem);
            });

            this.props.LookbookTags.forEach((tag) => {
                let itemList = [];
                allLookbookItems.forEach((item) => {
                    if (item.tags.includes(tag)) {
                        itemList.push(item);
                    }
                });
                Lookbook[tag] = itemList;
            });

            Lookbook["All"] = allLookbookItems;
        }
        return Lookbook;
    }

    initializeFilterImgs(tags, items) {
        let filterImgs = {};

        if (Object.keys(items).length === 0) {
            tags.forEach((tag) => {
                let img = "";
                filterImgs[tag] = img;
            });
        } else {
            tags.forEach((tag) => {
                let img = items[tag][0].imgSrc;
                filterImgs[tag] = img;
            });
        }
        return filterImgs;
    }

    render() {
        return (
            <div className="App">
                <Main
                    tabs={this.props.tabs}
                    closetTags={this.state.closetTags}
                    closetItems={this.state.closetItems}
                    closetFilterImgs={this.state.closetFilterImgs}
                    lookbookTags={this.state.lookbookTags}
                    lookbookItems={this.state.lookbookItems}
                    lookbookFilterImgs={this.state.lookbookFilterImgs}
                />
            </div>
        );
    }
}

export default App;
