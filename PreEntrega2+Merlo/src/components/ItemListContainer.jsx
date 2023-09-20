import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";
    // para llamar un documento: doc y getDoc
    // para llamara a la collection completa: collection y getDocs
    // para queries: query, where, limit y la que sea.

const mockAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(fetch('/products.json'))
        , 2000);
    })
}

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    
    const {id: catId} = useParams();
    useEffect(() => {
        const db = getFirestore();
        let items;
        if(catId) {
            items = query(collection(db, "products"), where("category", "==", catId), limit(5));
        } else {
            items = collection(db, "products");
        }
        
        getDocs(items).then((snapshot) => {
            if (snapshot.size != 0) {
                setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }) ) );
            } else {
                setData([]);
            }
        })
        
    },[catId]);
    
    return (
        <div className="item-container">
            <ItemList data={data} />
        </div>
    );

};

export default ItemListContainer;