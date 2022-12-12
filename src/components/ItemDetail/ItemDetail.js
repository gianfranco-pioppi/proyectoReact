import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={item.imagen} alt={item.nombre} className="img-thumbnail rounded w-1" />
            </div>
            <div className="col-md-8">
                <h1>{item.nombre}</h1>
                <h2>Precio: ${item.precio}</h2>
                <h5>Disponible: {item.stock}</h5>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
} 

export default ItemDetail;