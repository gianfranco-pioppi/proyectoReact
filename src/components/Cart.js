import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import Checkout from "../Checkout";

const Cart = () => {
    const {cart, cartTotal, clear, removeItem, sumTotal} = useContext(CartContext);
    console.log(cart);
    if (cartTotal() === 0) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                        "No se encontraron Productos en el Carrito!"
                        </div>
                        <Link to={"/"} className="btn btn-warning">Volver a la Página Principal</Link>
                    </div>
                </div>

        </div>
        )
    }

    

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                    <Link onClick={clear} className="btn btn-warning">Vaciar Carrito</Link>
                                </th>
                            </tr>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col" colSpan={5}>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {cart.map(item => (

                               <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="aling-middle">{item.nombre}</td>
                                    <td className="aling-middle">{item.quantity}</td>
                                    <td className="aling-middle">${item.quantity * item.precio}</td>
                                    <td><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash.svg"}  alt={"Eliminar Producto"} width="32" /></Link></td>
                               </tr>
                                ))
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td><b>Total a Pagar</b></td>
                                    <td>${sumTotal()}</td>
                                    <td className="text-end"><Link to={"../checkout"} className="btn btn-warning"><b>Finalizar Compra</b></Link></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        
    )
}

export default Cart;