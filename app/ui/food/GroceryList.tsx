import GroceryItem from "./GroceryItem";
import NewItem from "./NewItem";
import { addNewItemToBuy, getToBuyList } from "@/app/lib/food/mocks";

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
