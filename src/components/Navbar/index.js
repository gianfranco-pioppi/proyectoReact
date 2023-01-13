import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget';


export const NavBar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>GP Indumentaria</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to={"./category/remeras"}>Remeras</NavLink>
                            <NavLink className="nav-link active" to={"./category/buzos"}>Buzos</NavLink>
                            <NavLink className="nav-link active" to={"./category/pantalones"}>Pantalones</NavLink>
                            <NavLink className="nav-link active" to={"./category/cartwidget"}><CartWidget /></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;