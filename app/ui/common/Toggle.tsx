import { Dispatch, SetStateAction } from "react";

export default function Toggle({
  id,
  checked,
  setChecked,
  text,
}: {
  id: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="checkbox"
        id={id}
        className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
        checked={checked}
        onChange={() => {
          setChecked((curVal) => {
            return !curVal;
          });
        }}
      />
      <label
        htmlFor={id}
        className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
      >
        {text}
      </label>
    </div>
  );
}
