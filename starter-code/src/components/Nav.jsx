import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/idCard">Id Card</Link></li>
                    <li><Link to="/greetings">Greetings</Link></li>
                    <li><Link to="/random">Random Number</Link></li>
                    <li><Link to="/boxcolor">Box Color</Link></li>
                    <li><Link to="/creditcard">Credit Card</Link></li>
                    <li><Link to="/rating">Rating</Link></li>
                    <li><Link to="/driverCard">Diver's Card</Link></li>
                    <li><Link to="/like">Like Button</Link></li>

                </ul>
            </div>
        )
    }
}
