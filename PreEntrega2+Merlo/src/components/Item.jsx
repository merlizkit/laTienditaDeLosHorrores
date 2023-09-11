import { NavLink } from "react-router-dom"

//rafce - te crea un componente con el nombre del archivo y te lo exporta
export const Item = ({data}) => {


    return (
        <>
            {
                data ? (
                    <div className="item">
                        <NavLink key={data.id} to={`/item/${data.id}`} >
                            <img className="item-card-img" src={data.image} alt="product-image" />
                            <h5>{data.title}</h5>
                            <p>USD {data.price}</p>
                        </NavLink>
                    </div>
                ) : null
            }
        </>
    )
}