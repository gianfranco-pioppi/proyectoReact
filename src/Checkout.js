import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "./components/context/CartContext";


const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer:{name:nombre, phone:telefono, email:email}, 
            items:
                cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}))
            ,
            total:sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });

    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) =>
                            {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label for="telefono"  className="form-label">Telefono:</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su telefono" onInput={(e) =>
                            {setTelefono(e.target.value)}}/>
                        </div>
                        <div class="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su email" onInput={(e) =>
                            {setEmail(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Enviar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                <table className="table">

                        <tbody>
                            
                                {cart.map(item => (

                               <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="aling-middle">{item.nombre}</td>
                                    <td className="aling-middle">{item.quantity}</td>
                                    <td className="aling-middle">${item.quantity * item.precio}</td>
                                    
                               </tr>
                                ))
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td><b>Total a Pagar</b></td>
                                    <td>${sumTotal()}</td>
                                    
                                </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-warning" role="alert"> La Orden generada es: <b>{orderId}</b></div> : ""}
                    </div>

                </div>
            </div>
            </div>
    )
}

export default Checkout;
