'use client'
import { decrement, increment } from "@/app/lib/food/mocks"


export default function InventoryItem(
    {itemName, size, unit, quantity, id, exp}:{itemName:string, size:number, unit:string, quantity:number,id:string, exp:string|null}){
    
    function incrementNum(itemId:string){
        increment(itemId)
    }

    function decrementNum(itemId:string){
        decrement(itemId)
    }

    
    return(
        <div className="py-4 pl-4 flex flex-col bg-red-100 m-1">
            <p>{`${itemName} - ${size} ${unit}  x ${quantity}`}</p>
            <p>{exp && `expiry - ${exp}`}</p>
            <button onClick={async () => increment(id)} className="pr-5 bg-green-100 hover:bg-green-400 rounded">Increment</button>
            <button onClick={async () => decrement(id)} className="pl-5 bg-red-200   hover:bg-red-400 rounded">Decrement</button>
        </div>
        
    )
}