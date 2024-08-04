//TEMP

"use client";
import { Dispatch, SetStateAction, useState } from "react";
import InputModal from "../ui/food/modals/InputModal";
import Toggle from "../ui/common/Toggle";
import TextInput from "../ui/common/TextInput";
import GeneralModal from "../ui/food/modals/GeneralModal";

interface ModalTextInput {
  inputType: "text";
  id: string;
  name: string;
  value: string | "";
  placeholder?: string | null;
  required: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  disabled: boolean;
}

interface ModalNumberInput {
  inputType: "number";
  id: string;
  name: string;
  value: number;
  placeHolder?: string | null;
  required: boolean;
  setValue: Dispatch<SetStateAction<number>>;
  disabled: boolean;
}

class ModalText implements ModalTextInput {
  constructor(
    public inputType: "text",
    public id: string,
    public name: string,
    public value: string | "",
    public setValue: Dispatch<SetStateAction<string>>,
    public placeholder: string | "",
    public required: boolean,
    public disabled: boolean
  ) {}
}

class ModalNumber implements ModalNumberInput {
  constructor(
    public inputType: "number",
    public id: string,
    public name: string,
    public value: number,
    public required: boolean,
    public setValue: Dispatch<SetStateAction<number>>,
    public disabled: boolean,
    public placeHolder?: string | null
  ) {}
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [numInput1, setNumInput1] = useState(0);
  const [checked, setChecked] = useState(false);
  const fields: (ModalNumberInput | ModalTextInput)[] = [];

  fields.push(
    new ModalText("text", "txt1", "txt1", input, setInput, "", true, false)
  );
  fields.push(
    new ModalNumber(
      "number",
      "num1",
      "num1",
      numInput1,
      true,
      setNumInput1,
      false,
      ""
    )
  );

  fields.push(
    new ModalText("text", "txt1", "txt1", input, setInput, "woot", true, false)
  );
  return (
    <main>
      <h1>UNDER CONSTRUCTION</h1>
      <div>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          MOdal
        </button>
        {open && (
          <GeneralModal
            cols="3"
            successButtonText="ok"
            cancelButtonText="cancel"
            closeModalFunction={setOpen}
          >
            <p className="bg-green-200">1</p>
            <p className="bg-green-200">1</p>
            <p className="bg-green-200">1</p>
            <p className="bg-green-200">1</p>
            <p className="bg-green-200">1</p>
          </GeneralModal>
        )}
      </div>
    </main>
  );
}
