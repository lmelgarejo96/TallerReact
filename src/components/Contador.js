import React, { useState } from 'react';

const Contador = (props) => {
    /* const [nombre, setNombre] = useState('Luis'); */
    const [edad, setEdad] = useState(0);
    const { nameApp, lastNameApp } = props;

    const addEdad = () => {
        setEdad(edad+1);
    }

    const removeEdad = () => {
        setEdad(edad-1);
    }

    /* const addNombre = () => {
        
    } */

    return (
        <div>
            <h1>{ nameApp }, { lastNameApp } </h1>
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

export default Contador;