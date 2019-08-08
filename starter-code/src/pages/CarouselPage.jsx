import React, { Component } from 'react';
import Carousel from '../components/Carousel.jsx';

export default class CarouselPage extends Component {
    render() {
        return (
            <div>
                <Carousel
                    imgs={["https://randomuser.me/api/portraits/women/1.jpg", 
                            "https://randomuser.me/api/portraits/men/1.jpg",
                            "https://randomuser.me/api/portraits/women/2.jpg", 
                            "https://randomuser.me/api/portraits/men/2.jpg"]} 
                />
            </div>
        )
    }
}
