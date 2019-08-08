import React, { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
    state={
        diceFaces:["/img/dice1.png","/img/dice2.png","/img/dice3.png","/img/dice4.png","/img/dice5.png","/img/dice6.png"],
        diceDisplayed: ["/img/dice1.png","/img/dice2.png","/img/dice3.png","/img/dice4.png","/img/dice5.png","/img/dice6.png"][Math.floor(Math.random()*6)]
    }

        // let random=Math.floor(Math.random()*6);
        // return random;
    
    diceClick=()=>{
        this.setState({diceDisplayed:"/img/dice-empty.png"});
        setTimeout(function(){
            let ranNum= Math.floor(Math.random()*6);
            let faces= [...this.state.diceFaces]
            this.setState({diceDisplayed:faces[ranNum]})
        }.bind(this),1000)
    }

    render() {
        
        return (
            <div className="diceFace">
                <img onClick={this.diceClick} src={this.state.diceDisplayed} alt=""></img>
            </div>
        )
    }
}
