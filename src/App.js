import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
//Render function
//Hooks
const App = () => {
    
    const name = 'Luis';
    const lastName = 'Melgarejo';
    return ( 
        <div className="App">
            <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Contador nameApp={name} lastNameApp={lastName}/>
            
        </div>
    )
}

export default App;


// class render
/* class App2 extends Component{
    constructor() {
        this.state = {
            name: 'Luis'
        }
    }

    render(){
        <div>
            {this.state.name}
        </div>
    }
} */