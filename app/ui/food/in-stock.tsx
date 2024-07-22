import { getInventory } from "@/app/lib/food/mocks"
import InventoryItem from "./in-stock-item"

export default async  function Inventory(){
    const list =  await getInventory()

    return(
        <main className="p-3">
        {list.map(invItem => 
            <InventoryItem 
                itemName={invItem.itemName}
                size={invItem.size}
                unit={invItem.units}
                quantity={invItem.quantity}
                key={invItem.itemName+invItem.quantity}
            />
        )}
        </main>
    )
}