import React from 'react';
import '../assets/css/Navbar.css';

function Navbar() {
    return (  
        <React.Fragment>
            <h2>Algún texto innecesario, en otra etiqueta del componente Navbar</h2>
                <ul className="list">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About us</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Navbar;