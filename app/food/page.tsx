import Inventory from "../ui/food/InventoryList";
import GroceryList from "../ui/food/GroceryList";
import { addToInvDirect } from "../lib/food/mocks";
import NewInventoryItem from "../ui/food/NewInventoryItem";

export default function Page() {
  return (
    <>
      <div className="flex h-screen w-screen space-x-1 flex-col lg:flex-row bg-white border border-gray-200 shadow-sm  p-4 md:p-3 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <div className="relative flex flex-col lg:w-3/5 overflow-y-auto bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
          To buy
          <GroceryList />
        </div>
        <div className="relative flex flex-col lg:w-2/5 overflow-y-auto bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
          In stock
          <NewInventoryItem itemtype="inventory" formHandler={addToInvDirect} />
          <Inventory />
        </div>
      </div>
    </>
  );
}
