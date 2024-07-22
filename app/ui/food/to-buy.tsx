import GroceryItem from "./to-buy-item"
import NewItem from "./to-buy-new-item"
import { getToBuyList } from "@/app/lib/food/mocks"

export default async function GroceryList(){
const groceryList = await getToBuyList()
    
    
    return( 
        <main className="p-3">
            <NewItem />
            <div>
                {groceryList.map(item => 
                    <GroceryItem itemName={item.itemName} size={item.size} unit={item.units} quantity={item.quantity} id={item.id}key={item.id}/>
                )}
            </div>
        </main>
    )
}