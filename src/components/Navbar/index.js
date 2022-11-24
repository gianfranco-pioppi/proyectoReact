import React from "react";
import CartWidget from '../CartWidget';


export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__marca">
                    <a className="nav__link" href="#">GP Indumentaria</a>
                </div>
                <ul className="nav__list">
                    <li><a className="nav__link" href="">Inicio</a></li>
                    <li><a className="nav__link" href="">Nosotros</a></li>
                    <li><a className="nav__link" href=""> <CartWidget /> 3 </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;