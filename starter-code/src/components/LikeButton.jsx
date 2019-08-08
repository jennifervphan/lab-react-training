import React, { Component } from 'react';
import './LikeButton.css';

export default class LikeButton extends Component {
    state= {
        count:null,
        color:['purple','blue','green','yellow','orange','red'],
        displayedColor: "#ffffff"
    }
    
    increase = ()=>{
        let counter= this.state.count;
        counter++;
        let color = this.state.color[Math.floor(Math.random()*this.state.color.length)];
        this.setState({count:counter, displayedColor:color});
    }

    render() {
        return (
            <div>
                <button onClick={this.increase} style={{backgroundColor:this.state.displayedColor}}> {this.state.count} Like</button>
            </div>
        )
    }
}
