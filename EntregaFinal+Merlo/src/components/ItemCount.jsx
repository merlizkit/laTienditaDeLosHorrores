import { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {

    const [qty, setQty] = useState(Number(initial));

    const decrement = () => {
        if(qty > 1) {
            setQty(qty - 1);
        }
    }

    const increment = () => {
        if(qty < stock) {
            setQty(qty +1);
        }
    }

    return (
        <div>
            <div className="detail-count">
                <button className="small-button" onClick={decrement}>-</button>
                <h4>{ qty }</h4>
                <button className="small-button" onClick={increment}>+</button>
            </div>
            <div className="detail-button">
                <button className="large-button" onClick={() => onAdd(qty)}>Agregar al carrito</button>
            </div>
        </div>
    )
}