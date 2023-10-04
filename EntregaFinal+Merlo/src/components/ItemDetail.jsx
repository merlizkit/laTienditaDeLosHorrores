import { useContext, useState } from "react"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({data}) => {

    const [cartQty, setCartQty] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (qty) => {
        setCartQty(qty)

        const item = {
            id: data.id, 
            title: data.title, 
            price: Number(data.price)
        }

        addItem(item, Number(qty));
    }

    return (
        <div className="detail">
            {
                data ? (
                        <div className="detail-card">
                            <img className="detail-card-img" src={data.image} alt="product-image" />
                            <div className="detail-card-desc">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                            <h3 className="detail-card-price">USD {data.price}</h3>
                            <p className="detail-card-stock">Stock: {data.stock}</p>
                        </div>
                ) : null
            }
            {
                data ? (
                    cartQty > 0 ? (
                            <Link to='/cart'><button className="large-button">Terminar compra</button></Link>
                        ) : (
                            <ItemCount stock={data.stock} initial="1" onAdd={handleOnAdd} />
                       )

                    ) : null
            }
        </div>
    )
}