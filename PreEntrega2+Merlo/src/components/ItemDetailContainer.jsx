import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => 
            fetch('/products.json')
                .then(res => res.json())
                .then(data => setData(data))
        , 2000);
    }, []);

    const getItem = data.find(item => (item.id == id))
    console.log(getItem);


    return (
        <div>
            <ItemDetail data={getItem} />
        </div>
    )
}