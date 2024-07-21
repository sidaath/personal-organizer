import InventoryItem from "./in-stock-item"

export default function Inventory(){
    const list =  ['inv 1', 'inv 2', 'inv 3', 'inv 4']

    return(
        <>
        {list.map(invItem => 
            <InventoryItem item={invItem}/>
        )}
        </>
    )
}