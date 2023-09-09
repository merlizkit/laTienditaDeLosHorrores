import { Item } from "./Item"

export const ItemList = ({data}) => {

    return (
        <div className="list">
            <ul>
                {data.map(item => 
                    <Item key={item.id} data={item} />
                    )}
            </ul>
        </div>
    )
}