import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../json/productos.json";
import ItemCount from "../ItemCount/ItemCount";

import ItemList from "../ItemList/ItemList";



export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} =useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve (id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) =>{
            setItems(data);
        })
    });


    return (
        <div className="container">
            <div className="row">
                
                <div className="col-md-12">
                    <div>
                        <ItemList items={items} />
                        
                    </div>
                </div>

            </div>
        
        
        <ItemCount stock={10} />
        </div>
        
    );
}

export default ItemListContainer;