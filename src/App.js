import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//Render function
//Hooks
const App = () => {
    const [nombre, setNombre] = useState('Luis');
    const [edad, setEdad] = useState(0);

    const addEdad = () => {
        setEdad(edad+1);
    }

    const removeEdad = () => {
        setEdad(edad-1);
    }

    const addNombre = () => {
        
    }

    return ( 
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{ nombre }</h1>
            <div className="buttons">
                <button onClick={removeEdad}>
                -
                </button>
                <button onClick={addEdad}>
                +
                </button>
                
            </div>
            <h4>Edad: {edad}</h4>
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