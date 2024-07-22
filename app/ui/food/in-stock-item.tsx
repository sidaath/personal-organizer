export default function InventoryItem(
    {itemName, size, unit, quantity}:{itemName:string, size:number, unit:string, quantity:number}){
    return(
        <p>{`${itemName} - ${size} ${unit}  x ${quantity}`}</p>
    )
}