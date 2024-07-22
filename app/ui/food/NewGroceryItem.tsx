import { addNewItemToBuy } from "@/app/lib/food/mocks"

import AddToCartIcon from "../icons/addtocard"

export default async function NewItem(){
    const units = ['kg', 'g', 'pack', 'L', 'mL', 'dL']
    
    return(
        <form action={addNewItemToBuy} className="flex flex-col lg:flex-row p-3 rounded gap-4 bg-green-200">
            <input 
                id="itemName" 
                name="itemName" 
                type="text" 
                placeholder="add item ..." 
                required={true}
                className="md:w-2/3 rounded border border-gray-200 text-sm placeholder:text-gray-500 "/>
            <input 
                id="size"
                name="size"
                type="number"
                placeholder="Size"
                required={true}
                className="w-20 ml-15 rounded-md border border-gray-200 p-1 text-sm placeholder:text-gray-500"/>
            <select
                id="unit"
                name="unit"
                className="w-20 rounded border border-gray-200 text-sm placeholder:text-gray-500"
                required={true}
                defaultValue=""
                >
                <option value="" disabled>
                    select
                </option>
                {units.map((unit) => (
                    <option key={unit} value={unit}>
                        {unit}
                    </option>
                ))}
            </select>
            <input 
                id="quantity"
                name="quantity"
                type="number"
                placeholder="Qty"
                required={true}
                className="w-20 rounded-md border border-gray-200 text-sm placeholder:text-gray-500"/>
            <button type="submit" className="w-1/12">
                <AddToCartIcon className="stroke-slate-50 hover:bg-blue-300 w-10 h-8 rounded"/>
            </button>
        </form>
    )
}