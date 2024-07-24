'use client'
import { InventoryItemType } from "@/app/lib/food/definitions";
import { decrement, increment } from "@/app/lib/food/mocks"
import { useTransition } from "react"


export default function InventoryItem({invItem}:{invItem: InventoryItemType}){

        const [incrementTransition, startIncrementTransition] = useTransition();
        const [decrementTransition, startDecrementTransition] = useTransition();

    
    return(
        <div className="py-4 pl-4 flex flex-col bg-red-100 m-1">
            <p>{`${invItem.itemName} - ${invItem.size} ${invItem.units}  x ${invItem.quantity}`}</p>
            <p>{invItem.expiry && `expiry - ${invItem.expiry}`}</p>
            <button 
                disabled={incrementTransition} 
                onClick={()=> startIncrementTransition(async () => await increment(invItem.id))} 
                className="pr-5 bg-green-100 hover:bg-green-400 rounded disabled:cursor-not-allowed"
            >
                Increment
            </button>
            <button 
                disabled={decrementTransition}
                onClick={()=> startDecrementTransition(async () => await decrement(invItem.id))} 
                className="pl-5 bg-red-200   hover:bg-red-400 rounded disabled:cursor-not-allowed"
            >
                Decrement
            </button>
        </div>
        
    )
}