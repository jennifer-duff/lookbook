import React, { Component } from "react";
import InfoBox from "../InfoBox/InfoBox";
import "./ItemDetails.css";

class ItemDetails extends Component {
    // static defaultProps = {
    //     // ItemProperties: [
    //     //     "name",
    //     //     "tags",
    //     //     "brand",
    //     //     "size",
    //     //     "price",
    //     //     "season",
    //     //     "notes",
    //     // ],
    //     ItemProperties: Object.keys(this.props.item),
    // };

    // constructor(props) {
    //     super(props);
    // }

    reorderEntries() {
        let item = this.props.item;
        let reorderedEntries = [];
        for (const entry of Object.entries(item)) {
            switch (entry[0]) {
                case "name":
                    reorderedEntries[0] = entry;
                    break;
                case "tags":
                    reorderedEntries[1] = entry;
                    break;
                case "brand":
                    reorderedEntries[2] = entry;
                    break;
                case "season":
                    reorderedEntries[3] = entry;
                    break;
                case "size":
                    reorderedEntries[4] = entry;
                    break;
                case "price":
                    reorderedEntries[5] = entry;
                    break;

                case "notes":
                    reorderedEntries[6] = entry;
                    break;
                default:
                    break;
            }
        }

        return reorderedEntries;
    }

    render() {
        let ItemObjectEntries = this.reorderEntries();
        let src = this.props.item.imgSrc;
        let style = {
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "content-box",
        };

        console.log(style);

        return (
            <div className="ItemDetails">
                <div className="ItemDetails-ImgHolder" style={style}>
                    {/* <img
                        className="ItemDetails-Img"
                        src={this.props.item.imgSrc}
                        alt={this.props.item.name}
                    /> */}
                </div>
                <div className="ItemDetails-InfoWrapper">
                    {ItemObjectEntries.map(
                        ([key, value]) =>
                            key !== "imgSrc" && (
                                <InfoBox
                                    propertyName={key}
                                    key={key}
                                    propertyValue={value}
                                />
                            )
                    )}
                </div>
            </div>
        );
    }
}

export default ItemDetails;
