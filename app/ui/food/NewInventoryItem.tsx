"use client";

import { useRef, useState, useTransition } from "react";
import { SaveButton } from "./SaveButton";
import NewInventoryModal from "./modals/NewInvItemModal";
import TextInput from "../common/TextInput";
import NumberCtrl from "../common/NumberCtrl";

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
  const [name, setName] = useState("");

  async function submitForm(formData: FormData) {
    console.log("submitting form");
    startSaveTransition(async () => {
      await formHandler(formData);
    });
    setAddInvItem(false);
    setQty(0);
    setName("");
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      action={(formData: FormData) => submitForm(formData)}
      className="flex flex-col lg:flex-row p-3 rounded gap-4 dark:bg-neutral-900"
    >
      <TextInput
        id="itemName"
        name="itemName"
        placeholder="inv Item name ..."
        type="text"
        disabled={saveTransition}
        maxLength={50}
        required={true}
        inputValue={name}
        setInputValue={setName}
      />
      <NumberCtrl disabled={saveTransition} number={qty} setNumber={setQty} />
      <SaveButton
        itemtype={itemtype}
        disabled={qty === 0 || name === ""}
        loading={saveTransition}
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
