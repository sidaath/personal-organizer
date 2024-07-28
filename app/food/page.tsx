import Inventory from "../ui/food/InventoryList";
import GroceryList from "../ui/food/GroceryList";
import NewItem from "../ui/food/NewItem";
import { addToInvDirect, addToInventory } from "../lib/food/mocks";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col md:flex-row p-2 bg-red-100">
        <div className="md:w-2/3 flex-auto bg-blue-100 dark:bg-neutral-900">
          To buy
          <GroceryList />
        </div>
        <div className="md:w-1/3 flex-auto bg-yellow-100">
          In stock
          <NewItem itemtype="inventory" formHandler={addToInvDirect} />
          <Inventory />
        </div>
      </div>
    </main>
  );
}
