export default function GroceryItem(
    {itemName, amount, unit}:{itemName:string, amount:number, unit:string}){

    return (
        <div className="flex flex-row">
            <input type="checkbox"/>
            <h1 className="p-2">{itemName}</h1>
            <h2 className="p-2">{amount + " "+unit}</h2>
        </div>
    )
}