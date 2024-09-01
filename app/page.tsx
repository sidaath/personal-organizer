import Inventory from "./ui/food/InventoryList";
import GroceryList from "./ui/food/GroceryList";
import { addToInvDirect } from "./server/food/inventory";
import NewInventoryItem from "./ui/food/NewInventoryItem";
import NewItem from "./ui/food/NewItem";
import Card from "./ui/common/Card";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-neutral-900 p-2 fixed">
      <Card title="Checklist">
        <GroceryList />
      </Card>
      <Card title="Inventory">
        <NewInventoryItem itemtype="inventory" formHandler={addToInvDirect} />
        <Inventory />
      </Card>
    </div>
  );
}
