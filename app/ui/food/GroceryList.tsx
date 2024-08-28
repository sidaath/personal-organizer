import GroceryItem from "./GroceryItem";
import NewItem from "./NewItem";
import { addNewItemToBuy } from "@/app/lib/food/mocks";
import { getToBuyList } from "@/app/server/food/checklist";

export default async function GroceryList() {
  const groceryList = await getToBuyList();

  return (
    <div className="fmax-w-sm space-y-3">
      <NewItem itemtype="grocery" formHandler={addNewItemToBuy} />
      <div>
        {groceryList.map((toBuyItem) => (
          <GroceryItem item={toBuyItem} key={toBuyItem.id} />
        ))}
      </div>
    </div>
  );
}
