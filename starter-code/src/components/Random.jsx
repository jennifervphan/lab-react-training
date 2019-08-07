import React, { Component } from 'react'

export default class Random extends Component {    
    render() {
        const {min, max}=this.props;
        let randomNum=Math.floor(Math.random()*max + min);
        return (
            <div>
                <h3>Random value between {min} and {max} => {randomNum}</h3>
            </div>
        )
    }}