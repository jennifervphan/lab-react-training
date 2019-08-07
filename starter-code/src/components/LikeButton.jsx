import React, { Component } from 'react'

export default class LikeButton extends Component {
    
    increase = ()=>{
        let count=0;
        count++;
        return count;

    }
    render() {
        
        return (
            <div>
                <button onClick={this.increase}> {this.count} Like</button>
            </div>
        )
    }
}
