"use client";
import { InventoryItemType } from "@/app/lib/food/definitions";
import { decrement, increment } from "@/app/lib/food/mocks";
import { useTransition } from "react";

export default function InventoryItem({
  invItem,
}: {
  invItem: InventoryItemType;
}) {
  const [incrementTransition, startIncrementTransition] = useTransition();
  const [decrementTransition, startDecrementTransition] = useTransition();

  return (
    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {`${invItem.itemName} - ${invItem.size} ${invItem.units}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {invItem.quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {invItem.expiry ? invItem.expiry : "X"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-end text-sm font-medium">
        {incrementTransition || decrementTransition ? (
          <span
            className="inline-flex justify-center items-center animate-spin inline-block size-6 border-[3px] border-black border-t-transparent text-white rounded-full"
            role="status"
            aria-label="loading"
          ></span>
        ) : (
          <>
            <button
              type="button"
              className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              aria-label="Decrease"
              onClick={async () => {
                startDecrementTransition(async () => {
                  await decrement(invItem.id);
                });
              }}
              disabled={decrementTransition}
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
            </button>
            <button
              type="button"
              className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              aria-label="Increase"
              onClick={() => {
                startIncrementTransition(async () => {
                  await increment(invItem.id);
                });
              }}
              disabled={incrementTransition}
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
