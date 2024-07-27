"use client";

import { useRef, useTransition } from "react";
import AddToCartIcon from "../icons/addtocard";

export default function NewItem({ formHandler = (FormData: FormData) => {} }) {
  const units = ["kg", "g", "pack", "L", "mL", "dL"];
  const [saveTransition, startSveTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  async function submitForm(formData: FormData) {
    startSveTransition(async () => {
      await formHandler(formData);
      formRef.current?.reset();
    });
  }

  return (
    <form
      ref={formRef}
      action={(formData) => submitForm(formData)}
      className="flex flex-col lg:flex-row p-3 rounded gap-4 bg-green-200"
    >
      <input
        id="itemName"
        name="itemName"
        type="text"
        placeholder="add item ..."
        required={true}
        disabled={saveTransition}
        className="md:w-2/3 rounded border border-gray-200 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed"
      />
      <input
        id="size"
        name="size"
        type="number"
        placeholder="Size"
        required={true}
        disabled={saveTransition}
        className="w-20 ml-15 rounded-md border border-gray-200 p-1 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed"
      />
      <select
        id="unit"
        name="unit"
        className="w-20 rounded border border-gray-200 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed"
        required={true}
        disabled={saveTransition}
        defaultValue=""
      >
        <option value="" disabled>
          select
        </option>
        {units.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <input
        id="quantity"
        name="quantity"
        type="number"
        placeholder="Qty"
        required={true}
        disabled={saveTransition}
        className="w-20 rounded-md border border-gray-200 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed"
      />
      <button
        disabled={saveTransition}
        type="submit"
        className="w-1/12 disabled:cursor-not-allowed"
      >
        <AddToCartIcon className="stroke-slate-50 hover:bg-blue-300 w-10 h-8 rounded disabled:cursor-not-allowed" />
      </button>
    </form>
  );
}
