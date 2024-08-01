"use client";

import { Dispatch, SetStateAction } from "react";

export default function NumberInput({
  id,
  name,
  placeholder,
  required,
  disabled,
  number,
  setNumber,
}: {
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  maxLength?: number;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
      <div className="w-full flex justify-between items-center gap-x-1">
        <div className="grow py-2 px-3">
          <span className="block text-xs text-gray-500 dark:text-neutral-400">
            {placeholder}
          </span>
          <input
            id={id}
            name={name}
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
            value={number}
            onChange={(e) => {
              setNumber(Number(e.target.value));
            }}
            disabled={disabled}
            required={required}
          />
        </div>
        <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
          <button
            type="button"
            className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={() => {
              setNumber((num) => {
                return num - 1;
              });
            }}
            disabled={disabled || number === 0}
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
            className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={() => {
              setNumber((num) => {
                return num + 1;
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
      </div>
    </div>
  );
}
