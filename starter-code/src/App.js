import React, { Component } from 'react';
import Routes from './components/Routes.jsx';
import Nav from "./components/Nav";

class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <Nav />
            <Routes />
            </div>
        )
    }
}

export default App;