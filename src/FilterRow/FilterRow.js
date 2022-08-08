import React, { Component } from "react";
import "./FilterRow.css";
import FilterBtn from "../FilterBtn/FilterBtn";

class FilterRow extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleClick(evt) {
        console.log(`Clicked on ${evt.target.className}!`);
    }

    render() {
        return (
            <div className="FilterRow">
                {this.props.tagList.map((tag) => (
                    <FilterBtn
                        imgSrc=""
                        altText={`Filter by ${tag}`}
                        tag={tag}
                        key={tag}
                        btnClass={
                            this.props.activeFilter === tag
                                ? "FilterBtn FilterBtn-Active"
                                : "FilterBtn"
                        }
                    />
                ))}
            </div>
        );
    }
}

export default FilterRow;
