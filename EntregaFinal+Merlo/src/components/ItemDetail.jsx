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
            price: data.price
        }

        addItem(item, Number(qty));
    }

    if(data) {
        if (cartQty > 0) {
            return (
                <div className="detail">
                    <div className="detail-card">
                        <img className="detail-card-img" src={data.image} alt="product-image" />
                        <div className="detail-card-desc">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                        <h3 className="detail-card-price">USD {data.price}</h3>
                        <p className="detail-card-stock">Stock: {data.stock}</p>
                    </div>
                    <Link to='/cart'><button className="large-button">Terminar compra</button></Link>
                </div>
            )
        } else {
            return (
                <div className="detail">
                    <div className="detail-card">
                        <img className="detail-card-img" src={data.image} alt="product-image" />
                        <div className="detail-card-desc">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                        <h3 className="detail-card-price">USD {data.price}</h3>
                        <p className="detail-card-stock">Stock: {data.stock}</p>
                    </div>
                    <ItemCount stock={data.stock} onAdd={handleOnAdd} />
                </div>
            )
        }
    }
}