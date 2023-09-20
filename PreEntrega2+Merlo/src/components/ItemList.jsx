import { Item } from "./Item"

export const ItemList = ({data}) => {

    return (
        <div className="item-list">
            {
            data.length > 0 ? 
            data.map(item => 
                <Item key={item.id} data={item} />
            ) : <p className="item">Lo sentimos: No hay productos en esta categoría</p>}
        </div>
    )
}