import React from "react";
import Item from "../Item/Item.js";


const ItemList = ({items}) => {

    return (
        <div className="row">
        {
            items.map(item =>
                <div className="col-md-4">
                     <Item key={item.id} item={item}/>
                     </div>)
        }
        </div>
    );
}

export default ItemList;