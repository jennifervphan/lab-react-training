import React, { Component } from 'react';
import LikeButton from '../components/LikeButton';

export default class LikePage extends Component {
    render() {
        return (
            <div>
                <LikeButton /> 
                <LikeButton />
            </div>
        )
    }
}
