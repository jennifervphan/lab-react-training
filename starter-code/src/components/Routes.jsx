import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import IdCardPage from "../pages/IdCardPage.jsx";
import GreetingsPage from '../pages/GreetingsPage.jsx';
import RandomPage from '../pages/RandomPage.jsx';
import BoxcolorPage from '../pages/BoxcolorPage.jsx';
import CreditcardPage from '../pages/CreditcardPage.jsx';
import RatingPage from '../pages/RatingPage';
import DriverPage from '../pages/DriverPage';
import LikePage from '../pages/LikePage';
import ClickablePage from '../pages/ClickablePage.jsx';
import DicePage from '../pages/DicePage.jsx';
import CarouselPage from '../pages/CarouselPage.jsx';
import NumbersTablePage from '../pages/NumbersTablePage';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route  path = "/idCard" component ={IdCardPage}/>

                <Route  path="/greetings" component ={GreetingsPage}/>

                <Route  path="/random" component ={RandomPage}/>
                  
                <Route  path="/boxcolor" component ={BoxcolorPage}/>

                <Route path="/creditcard" component ={CreditcardPage}/>

                <Route path="/rating" component ={RatingPage}/>

                <Route path="/driverCard" component ={DriverPage}/>

                <Route path="/like" component ={LikePage}/>

                <Route path="/clickable" component ={ClickablePage}/>

                <Route path="/dice" component ={DicePage}/>

                <Route path="/carousel" component ={CarouselPage}/>

                <Route path="/numbersTable" component ={NumbersTablePage}/>

            </div>
        )
    }
}
