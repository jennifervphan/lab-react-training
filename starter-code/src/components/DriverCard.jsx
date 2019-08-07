import React, { Component } from 'react';
import Rating from './Rating';
import './DriverCard.css';

export default class DriverCard extends Component {
    render() {
        debugger
        const {name, rating, img, car} = this.props;
        return (
            <div className="driverCard">
                <div>
                    <img src={img} alt=""></img>
                </div>
                <div>
                    <h1>{name}</h1>
                    <Rating>{rating}</Rating>
                    <p>{car.model}-{car.licensePlate}</p>
                </div>
            </div>
        )
    }
}
