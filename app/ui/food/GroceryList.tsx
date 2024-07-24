import GroceryItem from "./GroceryItem"
import NewItem from "./NewGroceryItem"
import { getToBuyList } from "@/app/lib/food/mocks"

export default async function GroceryList(){
const groceryList = await getToBuyList()
    
    
    return( 
        <main className="flex flex-col p-2">
            <NewItem />
            <div>
                {groceryList.map(toBuyItem => 
                    <GroceryItem 
                        item={toBuyItem}
                        key={toBuyItem.id}
                        />
                )}
            </div>
        </main>
    )
}