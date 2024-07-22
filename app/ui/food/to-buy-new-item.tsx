import { addNewItemToBuy } from "@/app/lib/food/mocks"

export default async function NewItem(){
    const units = ['kg', 'g', 'pack', 'L', 'mL', 'dL']
    
    return(
        <form action={addNewItemToBuy} className="flex flex-row p-3 rounded-lg">
            <input 
                id="itemName" 
                name="itemName" 
                type="text" 
                placeholder="add item ..." 
                className="w-8/12 rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"/>
            <input 
                id="size"
                name="size"
                type="number"
                placeholder="Size"
                className="w-1/12 rounded-md border border-gray-200 p-1 text-sm placeholder:text-gray-500"/>
            <select
                id="unit"
                name="unit"
                className="w-1/12 rounded-md border border-gray-200 text-sm placeholder:text-gray-500"
                defaultValue=""
                >
                <option value="" disabled>
                    Select unit
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
                className="w-1/12 rounded-md border border-gray-200 text-sm placeholder:text-gray-500"/>
            <button type="submit" className="w-1/12">
                add
            </button>
        </form>
    )
}