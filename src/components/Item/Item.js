import React from "react";
import { Link } from "react-router-dom";


export const Item = ({item}) => {
    return (
        <div className="card text-center">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="card-text">Disponible: {item.stock}</p>
                </div>
            </Link>
        </div>
    );
}

export default Item;