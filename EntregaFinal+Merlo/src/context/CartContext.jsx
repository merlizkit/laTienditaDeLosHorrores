import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    let [totCartQty, setTotCartQty] = useState(0);
    let [totAmount, setTotAmount] = useState(0);

    const addItem = (item, qty) =>  {
        if(isInCart(item.id)) {
            console.error("Producto ya agregado al carro");
        } else {
            /* ----------------------------- agrega al carro ---------------------------- */
            setCart(prev => [...prev, {...item, qty}]);

            /* -------------------------- actualiza cantidades -------------------------- */
            setTotCartQty(totCartQty += qty);
            setTotAmount(totAmount += qty*item.price);
        }
    }
    const clearCart = () => {
        /* ----------------------------- vacia el carro ----------------------------- */
        setCart([]);

        /* --------------------------- reinicia cantidades -------------------------- */
        setTotCartQty(totCartQty = 0);
        setTotAmount(totAmount = 0);
    }
    const removeItem = (item) => {
        /* ----------------------- borra el producto del carro ---------------------- */
        const itemId = item.id;
        setCart(cart.filter(prod => prod.id != itemId));

        /* ------------------------ actualiza las cantidades ------------------------ */
        setTotCartQty(totCartQty -= item.qty);
        setTotAmount(totAmount -= item.qty*item.price);
    }
    const isInCart = (id) => {
        /* ------------------- verifica si el id está en el carro ------------------- */
        return cart.some(prod => prod.id == id);
    }
    
    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, totCartQty, totAmount}} >
            {children}
        </CartContext.Provider >
    )
}