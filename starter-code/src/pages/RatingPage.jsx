import React, { Component } from 'react';
import Rating from '../components/Rating.jsx';

export default class RatingPage extends Component {
    render() {
        return (
            <div>
                <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>1.5</Rating>
                <Rating>3</Rating>
                <Rating>4</Rating>
                <Rating>5</Rating>
            </div>
        )
    }
}
