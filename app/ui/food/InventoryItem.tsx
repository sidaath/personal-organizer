'use client'
import { decrement, increment } from "@/app/lib/food/mocks"
import { useTransition } from "react"


export default function InventoryItem(
    {itemName, size, unit, quantity, id, exp}:{itemName:string, size:number, unit:string, quantity:number,id:string, exp:string|null}){

        const [incrementTransition, startIncrementTransition] = useTransition();
        const [decrementTransition, startDecrementTransition] = useTransition();

    
    return(
        <div className="py-4 pl-4 flex flex-col bg-red-100 m-1">
            <p>{`${itemName} - ${size} ${unit}  x ${quantity}`}</p>
            <p>{exp && `expiry - ${exp}`}</p>
            <button 
                disabled={incrementTransition} 
                onClick={()=> startIncrementTransition(async () => await increment(id))} 
                className="pr-5 bg-green-100 hover:bg-green-400 rounded disabled:cursor-not-allowed"
            >
                Increment
            </button>
            <button 
                disabled={decrementTransition}
                onClick={()=> startDecrementTransition(async () => await increment(id))} 
                className="pl-5 bg-red-200   hover:bg-red-400 rounded disabled:cursor-not-allowed"
            >
                Decrement
            </button>
        </div>
        
    )
}