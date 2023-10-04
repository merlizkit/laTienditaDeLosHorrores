import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"

export const Cart = () => {
    const { cart, totAmount, clearCart } = useContext(CartContext)
    return (
        <>
            {
                cart.length > 0 ? (
                        <div className="cart">
                            {cart.map(item => 
                                <CartItem key={item.id} data={item} />)}
                            <div className="cart-foot">
                                <h2>Total: {Number(totAmount).toFixed(2)} USD</h2>
                            </div>
                            <Link to='/checkout'><button className="large-button">Finalizar Compra</button></Link>
                        </div>
                    ) : (
                        <div className="cart-empty" >
                            <p>No hay productos en el carrito</p>
                            <p>¡Seguro encontras algo que te guste en nuestro catalogo!</p>
                            <Link to="/"><button className="large-button">Ir al Catalogo</button></Link>
                        </div>
                    )
            }
        </>
    )
}