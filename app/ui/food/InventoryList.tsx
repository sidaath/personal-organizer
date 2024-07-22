import { getInventory } from "@/app/lib/food/mocks"
import InventoryItem from "./InventoryItem"

export default async  function Inventory(){
    const list =  await getInventory()

    return(
        <main className="p-3">
        {list.map(invItem => 
            <InventoryItem 
                id={invItem.id}
                itemName={invItem.itemName}
                size={invItem.size}
                unit={invItem.units}
                quantity={invItem.quantity}
                exp={invItem.exp}
                key={invItem.id}
            />
        )}
        </main>
    )
}