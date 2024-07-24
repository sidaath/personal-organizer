import { getInventory } from "@/app/lib/food/mocks"
import InventoryItem from "./InventoryItem"

export default async  function Inventory(){
    const list =  await getInventory()

    return(
        <main className="p-3">
        {list.map(item => 
            <InventoryItem 
                invItem={item}
                key={item.id}
            />
        )}
        </main>
    )
}