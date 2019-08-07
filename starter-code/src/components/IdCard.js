import React,{Component} from 'react';
import './IdCard.css';

class IdCard extends Component{
    render(){
        debugger
        const {picture,lastName,firstName,gender,height,birth} =this.props;
        return (
            <div className="idCard">
                <img src={picture} alt=""></img>
                <div>
                    <p>Last Name: <span>{lastName}</span></p>
                    <p>First Name: <span>{firstName}</span></p>
                    <p>Gender: <span>{gender}</span></p>
                    <p>Height: <span>{height}cm</span></p>
                    <p>Birthday: <span>{birth}</span></p>
                </div>
            </div>
        )
    }
}

export default IdCard 
