import { ItemCount } from "./ItemCount"

//rafce - te crea un componente con el nombre del archivo y te lo exporta
export const Item = ({data}) => {


    return (
        <>
            {
                data ? (
                    <div className="card">
                        <ul className="card-item">
                            <li><h2>{data.title}</h2></li>
                            <li>{data.description}</li>
                            <li><img className="card-img" src={data.image} alt="product-image" /></li>
                            <li>{data.price}</li>
                        </ul>
                    </div>
                ) : null
            }
            <ItemCount stock="5" initial="1" />
        </>
    )
}