import GroceryItem from "./to-buy-item"

export default function GroceryList(){
    const groceryList = ['item 1', 'item 2', 'item 3', 'item 4','item 5', 'item 6', 'item 7', 'item 8']
    const units = ['kg', 'g', 'Nos', 'L', 'mL', 'dL']
    
    return( 
        <main className="p-3">
            <div className="flex flex-row p-3 rounded-lg">
                <h1>+</h1>
                <input 
                    id="item" 
                    name="add item" 
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
                    
                    
                
            </div>
            <div>
                {groceryList.map(item => 
                    <GroceryItem itemName={item} key={item}/>
                )}
            </div>
        </main>
    )
}