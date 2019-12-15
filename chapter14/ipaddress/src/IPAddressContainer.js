import React, { Component } from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ipAddress: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        // This response of this request may not be 200.
        xhr.send();
        console.log('1');
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        console.log('2');
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ipAddress: response.ip
            });
        }
    }

    render() {
        return (
                <IPAddress ip={this.state.ipAddress}/>
        );
    }
}

export default IPAddressContainer;