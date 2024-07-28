import { getInventory } from "@/app/lib/food/mocks";
import InventoryItem from "./InventoryItem";

export default async function Inventory() {
  const list = await getInventory();

  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Item
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Quantity
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Expiry
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return <InventoryItem key={item.id} invItem={item} />;
        })}
      </tbody>
    </table>
  );
}
