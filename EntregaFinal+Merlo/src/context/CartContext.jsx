import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    let [TotCartQty3, setTotCartQty3] = useState(0);
    let [TotAmount3, setTotAmount3] = useState(0);

    const addItem = (item, qty) =>  {
        if(isInCart(item.id)) {
            /* --------------------- modifica cantidad del producto --------------------- */
            const index = cart.findIndex( prod => prod.id === item.id)
            const updCart = [...cart];
            updCart[index].qty = updCart[index].qty + qty
            setCart(updCart);
        } else {
            /* ----------------------------- agrega al carro ---------------------------- */
            setCart(prev => [...prev, {...item, qty}]);
        }
    }
    const clearCart = () => {
        /* ----------------------------- vacia el carro ----------------------------- */
        setCart([]);
    }
    const removeItem = (item) => {
        /* ----------------------- borra el producto del carro ---------------------- */
        const itemId = item.id;
        setCart(cart.filter(prod => prod.id != itemId));
    }
    const isInCart = (id) => {
        /* ------------------- verifica si el id está en el carro ------------------- */
        return cart.some(prod => prod.id == id);
    }
    const totCartQty = cart.reduce((total, product) => total + product.qty, 0);
    const totAmount = cart.reduce((total, product) => total + (product.qty * product.price), 0);
    
    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, totCartQty, totAmount}} >
            {children}
        </CartContext.Provider >
    )
}