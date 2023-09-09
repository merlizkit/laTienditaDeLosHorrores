import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([]);
    
    /* ----------------------- productos de fake store api ---------------------- */
    // useEffect(() => {
    //   fetch('https://fakestoreapi.com/products')
    //       .then(res => res.json())
    //       .then(data => setData(data))
    //       .catch(console.log('Error al buscar el archivo'))
    //   }, []);

    /* ----------------------- productos de products.json ----------------------- */
    useEffect(() => {
        setTimeout(() => 
            fetch('/products.json')
                .then(res => res.json())
                .then(data => setData(data))
        , 2000);
    }, []);
	
    return (
        <div className="products">
            <h1>{greeting}</h1>
            <ItemList data={data} />
        </div>
    );

};

export default ItemListContainer;