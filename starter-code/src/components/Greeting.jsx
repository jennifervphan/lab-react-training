import React, { Component } from 'react'

export default class Greeting extends Component {

    render() {
        const {lang}=this.props;
        let greeting="";
        switch (lang) {
            case "de":
                greeting="Hallo";
            break;
            case "fr":
                greeting="Bonjour";
            break;
            default:
                greeting="Hello";
        }

        return (
            <div>
                <h3>{greeting} {this.props.children}</h3>
            </div>
        )
    }
}
