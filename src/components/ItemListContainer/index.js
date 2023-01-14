import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection , getFirestore, getDocs, query, where } from "firebase/firestore";



export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} =useParams()

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;


        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                
                <div className="col-md-12">
                    <div>
                        <ItemList items={items} />
                        
                    </div>
                </div>

            </div>
    
        </div>
        
    );
}

export default ItemListContainer;