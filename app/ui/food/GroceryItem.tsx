"use client";

import { ToBuyItemType } from "@/app/lib/food/definitions";
import { addToInventory } from "@/app/lib/food/mocks";
import { useTransition } from "react";

export default function GroceryItem({ item }: { item: ToBuyItemType }) {
  const [checkTransition, setCheckTransition] = useTransition();
  function handleCheckBox() {
    setCheckTransition(async () => {
      console.log("client - running handleCheckBox");
      const formData = new FormData();
      formData.append("itemName", item.itemName);
      formData.append("size", item.size.toString());
      formData.append("unit", item.units);
      formData.append("quantity", item.quantity.toString());
      formData.append("id", item.id);
      await addToInventory(formData);
    });
  }

  return (
    <>
      <div className="relative flex items-start dark:bg-neutral-900 py-3 rounded">
        <div className="flex items-center h-5 mt-1">
          {!checkTransition ? (
            <input
              id="hs-checkbox-delete"
              name="hs-checkbox-delete"
              type="checkbox"
              onChange={handleCheckBox}
              className="border-gray-200 hover:cursor-pointer rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              aria-describedby="hs-checkbox-delete-description"
            />
          ) : (
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
        <label
          htmlFor="hs-checkbox-delete"
          className="ms-3 hover:cursor-pointer"
        >
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">
            {item.itemName}
          </span>
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">
            {`${item.quantity}`}
          </span>
        </label>
        <label htmlFor="hs-checkbox-delete" className="ms-3">
          <span
            id="hs-checkbox-delete-description"
            className="block text-sm text-gray-600 dark:text-neutral-500"
          >
            {`${item.size} ${item.units}`}
          </span>
        </label>
      </div>
    </>
  );
}
