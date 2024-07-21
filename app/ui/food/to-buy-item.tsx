export default function GroceryItem({itemName}:{itemName:string}){

    return (
        <div className="flex flex-row">
            <input type="checkbox"/>
            <h1 className="p-2">{itemName}</h1>
        </div>
    )
}