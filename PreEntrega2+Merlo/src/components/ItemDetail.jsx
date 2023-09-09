import { Item } from "./Item"

export const ItemDetail = ({data}) => {

    return (
        <div className="detail">
            <ul>
                <Item data={data} />
            </ul>

        </div>
    )
}