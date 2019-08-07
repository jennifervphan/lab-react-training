import React, { Component } from 'react';
import  BoxColor from '../components/BoxColor.jsx'

export default class BoxcolorPage extends Component {
    render() {
        return (
            <div>
                <BoxColor r={255} g={0} b={0} />
                <BoxColor r={128} g={255} b={0} />
            </div>
        )
    }
}
