import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Checkout = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [orderId, setOrderId] = useState();

    const { cart, totAmount, clearCart } = useContext(CartContext)
    
    const createOrder = () => {
        const db = getFirestore()
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            items: cart,
            date: new Date(),
            total: totAmount
        };

        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order).then(result => setOrderId(result.id));

        clearCart();
    }

    if(orderId) {
        return (
            <div className="checkout-container">
                <h1>{`¡Gracias por tu compra!`}</h1>
                <h3>{`Tu id de pedido es ${orderId}`}</h3>
                <Link to="/"><button className="large-button">Ir al Catalogo</button></Link>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h2>Ingresá tus datos para terminar la compra</h2>
            <form className="checkout-form">
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" value={name} onChange={event => {setName(event.target.value)}} />
                <label htmlFor="email">Email</label>
                <input id="email" type="mail" value={email} onChange={event => {setEmail(event.target.value)}} />
                <label htmlFor="phone">Telefono</label>
                <input id="phone" type="number" value={phone} onChange={event => {setPhone(event.target.value)}} />
            </form>
            <Link to='/checkout'><button className="large-button" onClick={createOrder} >Finalizar compra</button></Link>
        </div>
    )

}