"use client";

import { useRef, useState, useTransition } from "react";
import { SaveButton } from "./SaveButton";
import TextInput from "../common/TextInput";
import NumberInput from "../common/NumberInput";
import SelectItem from "../common/SelectItem";
import NumberCtrl from "../common/NumberCtrl";

export default function NewItem({
  formHandler,
  itemtype,
}: {
  formHandler: (FormData: FormData) => {};
  itemtype: "grocery" | "inventory";
}) {
  const units = ["kg", "g", "pack", "L", "mL", "dL"];
  const [saveTransition, startSveTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");

  async function submitForm(formData: FormData) {
    console.log("submitting form");
    startSveTransition(async () => {
      await formHandler(formData);
      console.log(formData);
      formRef.current?.reset();
      setSize(0);
      setQuantity(0);
      setName("");
    });
  }

  return (
    <form
      ref={formRef}
      action={(formData: FormData) => submitForm(formData)}
      className="flex flex-col lg:flex-row p-3 rounded gap-4 dark:bg-neutral-900"
    >
      <TextInput
        name="itemName"
        type="text"
        id="itemName"
        placeholder="Item ..."
        disabled={saveTransition}
        required={true}
        inputValue={name}
        setInputValue={setName}
      />
      <NumberInput
        id="size"
        name="size"
        placeholder="Amount"
        required={true}
        disabled={saveTransition}
        number={size}
        setNumber={setSize}
      />
      <SelectItem
        id="unit"
        name="unit"
        required={true}
        disabled={saveTransition}
        defaultValue=""
        items={units}
      />
      <NumberCtrl
        number={quantity}
        setNumber={setQuantity}
        disabled={saveTransition}
      />
      <SaveButton
        itemtype={itemtype}
        disabled={saveTransition || name === "" || quantity === 0 || size === 0}
        loading={saveTransition}
      />
    </form>
  );
}
