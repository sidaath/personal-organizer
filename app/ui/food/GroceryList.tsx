import Card from "../common/Card";
import GroceryItem from "./GroceryItem";
import NewItem from "./NewItem";
import { addNewItemToBuy } from "@/app/server/food/checklist";
import { getToBuyList } from "@/app/server/food/checklist";

export default async function GroceryList() {
  const groceryList = await getToBuyList();

  return (
    <>
      <div className="sticky">
        <NewItem itemtype="grocery" formHandler={addNewItemToBuy} />
      </div>

      <div className="overflow-y-auto">
        <div>
          {groceryList.map((toBuyItem) => (
            <GroceryItem item={toBuyItem} key={toBuyItem.id} />
          ))}
        </div>
      </div>
    </>
  );
}
