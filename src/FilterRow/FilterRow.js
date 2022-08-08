import React, { Component } from "react";
import "./FilterRow.css";
import FilterBtn from "../FilterBtn/FilterBtn";

class FilterRow extends Component {
    constructor(props) {
        super(props);
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(filter) {
        this.props.handleFilterSwitch(filter);
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
                        changeFilter={this.changeFilter}
                    />
                ))}
            </div>
        );
    }
}

export default FilterRow;
