import { getInventory } from "@/app/server/food/inventory";
import InventoryItem from "./InventoryItem";
import { Dayjs } from "dayjs";
import { InventoryItemType } from "@/app/lib/food/definitions";

export default async function Inventory() {
  const list = await getInventory();
  console.log(list);

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
        {list.map((item: InventoryItemType) => {
          return <InventoryItem key={item.id} invItem={item} />;
        })}
      </tbody>
    </table>
  );
}
