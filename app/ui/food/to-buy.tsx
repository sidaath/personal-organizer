import GroceryItem from "./to-buy-item"
import NewItem from "./to-buy-new-item"
import { getToBuyList } from "@/app/lib/mocks"

export default async function GroceryList(){
const groceryList = await getToBuyList()
    
    
    return( 
        <main className="p-3">
            <NewItem />
            <div>
                {groceryList.map(item => 
                    <GroceryItem itemName={item.itemName} amount={item.amount} unit={item.units} key={item.itemName+item.amount}/>
                )}
            </div>
        </main>
    )
}