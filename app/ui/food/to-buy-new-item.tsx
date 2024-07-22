import { addNewItemToBuy } from "@/app/lib/mocks"

export default async function NewItem(){
    const units = ['kg', 'g', 'Nos', 'L', 'mL', 'dL']
    
    return(
        <form action={addNewItemToBuy} className="flex flex-row p-3 rounded-lg">
            <input 
                id="itemName" 
                name="itemName" 
                type="text" 
                placeholder="add item ..." 
                className="w-4/6 rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"/>
            <input 
                id="amount"
                name="amount"
                type="number"
                placeholder="Amount"
                className="w-1/6 rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"/>
            <select
                id="unit"
                name="unit"
                className="w-1/6 rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
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
            <button type="submit">
                add
            </button>
        </form>
    )
}