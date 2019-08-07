import React, { Component } from 'react';
import './Creditcard.css';

export default class Creditcard extends Component {
    render() {
        const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}=this.props;

        let image;
        if (type==="Visa")
        {
        image="img/visa.png"
        } else{ 
        image="img/master-card.svg"
        }

        let displayedNum=number.slice(number.length-4,number.length);

        let month
        if (expirationMonth<10){
            month="0" + expirationMonth
        }else{
            month=expirationMonth
        }

        return (  
            <div className="eachCredit" style={{backgroundColor:bgColor,color:color}}>
                <div>
                    <img src={image} alt=""></img>
                </div>
                <div>
                    <p className="bankAcc"><span>• • • •</span>    <span>• • • •</span>    <span>• • • •</span>    {displayedNum}</p>
                </div>
                <div>
                    <div className="bankName">
                        <p>Expires {month}/{expirationYear}</p>
                        <p>{bank}</p>
                    </div>
                    <p>{owner}</p>
                </div>
            </div>
        )
    }
}
