import React, { Component } from "react";
import "./FilterRow.css";
import FilterBtn from "../FilterBtn/FilterBtn";
// import editIcon from "../_assets/edit-icon.svg"

class FilterRow extends Component {
    constructor(props) {
        super(props);
        this.changeFilter = this.changeFilter.bind(this);
        this.editFilters = this.editFilters.bind(this);
    }

    changeFilter(filter) {
        this.props.handleFilterSwitch(filter);
    }

    editFilters(){
        console.log("We editing filters!");
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
                <FilterBtn 
                    // imgSrc={editIcon}
                    imgSrc=""
                    altText="Edit Filters"
                    key="Edit Filters"
                    btnClass="FilterBtn"
                    OnClick={this.editFilter}
                />
            </div>
        );
    }
}

export default FilterRow;
