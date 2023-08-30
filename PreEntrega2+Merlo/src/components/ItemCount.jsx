import { useState } from "react";

export const ItemCount = ({stock, initial}) => {

    const [qty, setQty] = useState(Number(initial));

    return (
        <div>
            <button onClick={() => {
                if(qty > 0) {
                    setQty(qty - 1);
                    console.log('then + >0 ', 'initial ', initial, 'stock ', stock, 'qty ', qty);
                } else {
                    setQty(qty - qty);
                    console.log('else + >0 ', 'initial ', initial, 'stock ', stock, 'qty ', qty);
                }
            }}>-</button>

            { qty }
            
            <button onClick={() => {
                if(qty < stock) {
                    setQty(qty +1);
                    console.log('then + <stk ', 'initial ', initial, 'stock ', stock, 'qty ', qty);
                } else {
                    setQty(qty);
                    console.log('else + <stk ', 'initial ', initial, 'stock ', stock, 'qty ', qty);
                }
                }}>+</button>
        </div>
    )
}