"use client";

import { useRef, useState, useTransition } from "react";
import { SaveButton } from "./SaveButton";
import NewInventoryModal from "./modals/NewInvItemModal";
import TextInput from "../common/TextInput";
import NumberCtrl from "../common/NumberCtrl";
import dayjs from "dayjs";

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
  const [size, setSize] = useState(0);
  const [expDate, setExpDate] = useState(dayjs());

  async function submitForm(formData: FormData) {
    console.log("submitting form");
    console.log(expDate.toString());
    formData.append("exp", expDate.toString());
    console.log(expDate);
    startSaveTransition(async () => {
      await formHandler(formData);
    });
    setAddInvItem(false);
    formRef.current?.reset();
  }

  //TODO
  //allow null expiry date in direct add

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
      />
      <NumberCtrl disabled={saveTransition} number={qty} setNumber={setQty} />
      <SaveButton
        itemtype={itemtype}
        disabled={saveTransition}
        onClickFunction={() => {
          setAddInvItem(true);
        }}
      />

      {addInvItem && !saveTransition && (
        <NewInventoryModal
          closeModal={() => setAddInvItem(false)}
          size={size}
          setSize={setSize}
          day={expDate}
          setDay={setExpDate}
        />
      )}
    </form>
  );
}
