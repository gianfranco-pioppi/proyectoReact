import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import arrayProductos from "../json/productos.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import userEvent from "@testing-library/user-event";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    // const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve (arrayProductos.find(item => item.id === parseInt(id)));
    //         }, 2000);
    //     });

    //     promesa.then((data) =>{
    //         setItem(data);
    //     })
    // }, [id]);

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            } else {

            }
        })
    }, []);


    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
        
    )
} 

export default ItemDetailContainer;