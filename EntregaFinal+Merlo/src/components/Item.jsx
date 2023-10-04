import { NavLink } from "react-router-dom"

//rafce - te crea un componente con el nombre del archivo y te lo exporta
export const Item = ({data}) => {


    return (
        <>
            {
                data ? (
                    <div className="item">
                        <NavLink className="item-card" key={data.id} to={`/item/${data.id}`} >
                            <img className="item-card-img" src={data.image} alt="product-image" />
                            <h5 className="item-card-title">{data.title}</h5>
                            <p className="item-card-price">USD {data.price}</p>
                        </NavLink>
                    </div>
                ) : null
            }
        </>
    )
}