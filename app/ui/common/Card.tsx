import { Children } from "react";

export default function Card({
  children,
  title,
}: {
  children: any;
  title: string;
}) {
  return (
    <div className="basis-1 grow min-w-200 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-y-auto">
      <div className="p-4 text-gray-800 dark:text-white">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
