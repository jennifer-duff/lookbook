import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header.js";

class App extends Component {
    static defaultProps = {
        tabs: ["Closet", "Lookbook"],
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.tabs[0],
        };
        this.handleTabSwitch = this.handleTabSwitch.bind(this);
    }

    handleTabSwitch(tab) {
        this.setState({
            activeTab: tab,
        });
    }

    render() {
        return (
            <div className="App">
                <Header
                    className="App-Header"
                    activeTab={this.state.activeTab}
                    handleTabSwitch={this.handleTabSwitch}
                    tabs={this.props.tabs}
                />
            </div>
        );
    }
}

export default App;
