import React, { Component } from 'react'

export default class Rating extends Component {
    render() {
        let rate =this.props.children;
        let blackNumber ;
        if (rate%rate > 0.5){
            blackNumber= Math.ceil(rate);
        } else{
            blackNumber=Math.floor(rate);
        }
        debugger
        let whiteNumber=5-blackNumber;
        let whitestars= ("☆").repeat(whiteNumber)
        let blackstars= ("★").repeat(blackNumber)
        let stars=blackstars+whitestars;

        return (
            <div>
                <h1>{stars}</h1>
            </div>
        )
    }
}
