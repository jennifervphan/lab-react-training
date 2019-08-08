import React, { Component } from 'react';
import ClickablePicture from '../components/ClickablePicture.jsx';

export default class ClickablePage extends Component {
    render() {
        return (
                <ClickablePicture
                    img="/img/persons/maxence.png"
                    imgClicked="/img/persons/maxence-glasses.png" />
        )
    }
}
