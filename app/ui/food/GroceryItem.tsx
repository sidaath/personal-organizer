"use client";

import { ToBuyItemType } from "@/app/lib/food/definitions";
import { addToInventory } from "@/app/server/food/checklist";
import { useRef, useState, useTransition } from "react";
import CheckboxModal from "./modals/CheckboxModal";

export default function GroceryItem({ item }: { item: ToBuyItemType }) {
  const [checkTransition, setCheckTransition] = useTransition();
  const [getExp, setGetExp] = useState(false);

  const formDataRef = useRef(new FormData());

  function handleCheckBox() {
    setGetExp(true);
  }

  function submitNewInvItem() {
    setGetExp(false);
    setCheckTransition(async () => {
      console.log("client - running handleCheckBox");
      formDataRef.current.append("itemName", item.itemName);
      formDataRef.current.append("size", item.size.toString());
      formDataRef.current.append("unit", item.units);
      formDataRef.current.append("quantity", item.quantity.toString());
      formDataRef.current.append("id", item.id.toString());
      console.log(formDataRef.current.get("exp"));
      await addToInventory(formDataRef.current);
    });
  }

  return (
    <>
      <div className="relative flex items-start dark:bg-neutral-900 py-3 rounded">
        <div className="flex items-center h-5 mt-1">
          {!checkTransition && !getExp ? (
            <input
              id={item.id.toString()}
              name={item.id.toString()}
              type="checkbox"
              onChange={handleCheckBox}
              className="border-gray-200 hover:cursor-pointer rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          ) : (
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <input hidden id={item.id.toString()} />
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
        <label
          htmlFor={item.id.toString()}
          className="ms-3 hover:cursor-pointer"
        >
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">
            {item.itemName}
          </span>
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">
            {`x ${item.quantity}`}
          </span>
        </label>
        <label htmlFor={item.id.toString()} className="ms-3">
          <span
            id={`${item.id}`}
            className="block text-sm text-gray-600 dark:text-neutral-500"
          >
            {`${item.size} ${item.units}`}
          </span>
        </label>
      </div>
      {getExp && !checkTransition && (
        <form action={submitNewInvItem}>
          <CheckboxModal
            closeModal={setGetExp}
            itemName={item.itemName}
            formData={formDataRef.current}
          />
        </form>
      )}
    </>
  );
}
