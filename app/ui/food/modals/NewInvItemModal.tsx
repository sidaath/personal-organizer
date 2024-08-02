import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SetStateAction, Dispatch } from "react";
import SelectItem from "../../common/SelectItem";
import NumberInput from "../../common/NumberInput";
import dayjs from "dayjs";

export default function NewInventoryModal({
  closeModal,
  size,
  setSize,
  day,
  setDay,
}: {
  closeModal: any;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  day: dayjs.Dayjs;
  setDay: Dispatch<SetStateAction<dayjs.Dayjs>>;
}) {
  const units = ["kg", "g", "pack", "L", "mL", "dL"];
  return (
    <div className="size-full z-40 fixed absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3
              id="hs-basic-modal-label"
              className="font-bold text-gray-800 dark:text-white"
            >
              Details
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              onClick={() => closeModal()}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
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
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto flex flex-row gap-2">
            <NumberInput
              id="size"
              name="size"
              placeholder=""
              required={true}
              disabled={false}
              number={size}
              setNumber={setSize}
            />
            <SelectItem
              id="unit"
              name="unit"
              required={true}
              items={units}
              disabled={false}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disablePast={true}
                value={day}
                onChange={(newValue) => setDay(newValue || dayjs())}
              />
            </LocalizationProvider>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              onClick={() => {
                closeModal(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
