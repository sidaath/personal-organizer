'use client'

import { addToInventory } from "@/app/lib/food/mocks";

export default function GroceryItem(
    {itemName, size, unit, quantity, id}:{itemName:string, size:number, unit:string, quantity:number, id:string}){

     function handleCheckBox(){
        console.log("client - running handleCheckBox")
        const formData = new FormData();
        formData.append('itemName', itemName);
        formData.append('size', size.toString());
        formData.append('unit', unit)
        formData.append('quantity', quantity.toString())
        formData.append('id', id)
        addToInventory(formData)

    }
    return (
        <form className="flex flex-row items-center">
            <input 
                type="checkbox" 
                onChange={handleCheckBox}
                className="w-6 h-6 bg-blue-50 cursor-pointer rounded hover:bg-blue-200"
                />
            <h1 className="p-2">{itemName}</h1>
            <h2 className="p-2">{size + " "+unit+" x"+quantity}</h2>
        </form>
    )
}