'use client'

import { ToBuyItemType } from "@/app/lib/food/definitions";
import { addToInventory } from "@/app/lib/food/mocks";

export default function GroceryItem({item}: {item:ToBuyItemType}){

     function handleCheckBox(){
        console.log("client - running handleCheckBox")
        const formData = new FormData();
        formData.append('itemName', item.itemName);
        formData.append('size', item.size.toString());
        formData.append('unit', item.units)
        formData.append('quantity', item.quantity.toString())
        formData.append('id', item.id)
        addToInventory(formData)

    }
    return (
        <form className="flex flex-row items-center">
            <input 
                type="checkbox" 
                onChange={handleCheckBox}
                className="w-6 h-6 bg-blue-50 cursor-pointer rounded hover:bg-blue-200"
                />
            <h1 className="p-2">{item.itemName}</h1>
            <h2 className="p-2">{item.size + " "+item.units+" x"+item.quantity}</h2>
        </form>
    )
}