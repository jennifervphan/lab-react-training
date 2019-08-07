import React, { Component } from 'react';
import Creditcard from '../components/Creditcard.jsx';
import "../components/Creditcard.css"

export default class CreditcardPage extends Component {
    render() {
        return (
            <div className="creditCard">
                <Creditcard 
                    type="Visa"
                    number="0123456789018845"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="BNP"
                    owner="Maxence Bouret"
                    bgColor="#11aa99"
                    color="white" />
                <Creditcard 
                    type="Master Card"
                    number="0123456789010995"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="N26"
                    owner="Maxence Bouret"
                    bgColor="#eeeeee"
                    color="#222222" />
                <Creditcard 
                    type="Visa"
                    number="0123456789016984"
                    expirationMonth={12}
                    expirationYear={2019}
                    bank="Name of the Bank"
                    owner="Firstname Lastname"
                    bgColor="#ddbb55"
                    color="white" />
            </div>
        )
    }
}
