import { createContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    return (
        <CartContext.Provider value={[]} >
            {children}
        </CartContext.Provider >
    )
}