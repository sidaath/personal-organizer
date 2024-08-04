export default function SelectItem({
  id,
  name,
  required,
  disabled,
  defaultValue,
  items,
}: {
  id: string;
  name: string;
  required: boolean;
  disabled: boolean;
  defaultValue?: string;
  items: any[];
}) {
  return (
    <select
      id={id}
      name={name}
      className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
      required={required}
      disabled={disabled}
      defaultValue={defaultValue ? defaultValue : ""}
    >
      <option value="" disabled>
        Unit
      </option>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
