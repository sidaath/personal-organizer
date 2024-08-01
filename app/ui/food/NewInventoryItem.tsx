"use client";

import { useRef, useState, useTransition } from "react";
import { SaveButton } from "./SaveButton";
import NewInventoryModal from "./NewInvItemModal";

export default function NewInventoryItem({
  formHandler,
  itemtype,
}: {
  formHandler: (FormData: FormData) => {};
  itemtype: "grocery" | "inventory";
}) {
  const [saveTransition, startSaveTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [qty, setQty] = useState(0);
  const [addInvItem, setAddInvItem] = useState(false);

  async function submitForm(formData: FormData) {
    console.log("submitting form");
    startSaveTransition(async () => {
      await formHandler(formData);
    });
    setAddInvItem(false);
    formRef.current?.reset();
  }

  function setQuantity(num: number) {
    if (isNaN(num)) {
      return;
    } else {
      setQty(Number(num));
    }
  }

  return (
    <form
      ref={formRef}
      action={(formData: FormData) => submitForm(formData)}
      className="flex flex-col lg:flex-row p-3 rounded gap-4 dark:bg-neutral-900"
    >
      <input
        id="itemName"
        name="itemName"
        type="text"
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder="inv Item name ..."
        disabled={saveTransition}
        maxLength={50}
        required={true}
      />

      <div className="flex items-center gap-x-1.5">
        <button
          type="button"
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          aria-label="Decrease"
          onClick={() => {
            setQty((qty) => {
              return qty - 1;
            });
          }}
          disabled={qty <= 0}
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
        <input
          id="quantity"
          name="quantity"
          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
          value={qty}
          aria-roledescription="Number field"
          data-hs-input-number-input=""
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />
        <button
          type="button"
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          aria-label="Increase"
          onClick={() => {
            setQty((qty) => {
              return qty + 1;
            });
          }}
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
      </div>
      <SaveButton
        itemtype={itemtype}
        disabled={saveTransition}
        onClickFunction={() => {
          setAddInvItem(true);
        }}
      />

      {addInvItem && !saveTransition && (
        <NewInventoryModal closeModal={() => setAddInvItem(false)} />
      )}
    </form>
  );
}
