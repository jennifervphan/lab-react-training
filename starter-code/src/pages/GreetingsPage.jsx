import React, { Component } from 'react';
import Greeting from '../components/Greeting.jsx';

export default class GreetingsPage extends Component {
    render() {
        return (
            <div>
                <Greeting lang="de">Ludwig</Greeting>
                <Greeting lang="fr">François</Greeting>
            </div>
        )
    }
}
