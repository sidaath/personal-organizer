import { Dispatch, SetStateAction } from "react";

export default function NumberCtrl({
  number,
  setNumber,
  disabled,
}: {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center gap-x-1.5">
      <button
        type="button"
        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        aria-label="Decrease"
        onClick={() => {
          setNumber((qty) => {
            return qty - 1;
          });
        }}
        disabled={number <= 0 || disabled}
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
        type="text"
        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
        value={number}
        aria-roledescription="Number field"
        data-hs-input-number-input=""
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        disabled={disabled}
      />
      <button
        type="button"
        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        aria-label="Increase"
        onClick={() => {
          setNumber((qty) => {
            return qty + 1;
          });
        }}
        disabled={disabled}
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
  );
}
