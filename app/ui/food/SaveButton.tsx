export function SaveButton({
  itemtype,
  disabled,
  onClickFunction,
}: {
  itemtype: "grocery" | "inventory";
  disabled: boolean;
  onClickFunction?: () => void | null;
}) {
  let icon = null;
  if (itemtype === "grocery") {
    icon = (
      <svg
        className="shrink-0 size-6 stroke-black dark:stroke-white hover:stroke-black"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 11 4-7"></path>
        <path d="m19 11-4-7"></path>
        <path d="M2 11h20"></path>
        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
        <path d="m9 11 1 9"></path>
        <path d="M4.5 15.5h15"></path>
        <path d="m15 11-1 9"></path>
      </svg>
    );
  }

  if (itemtype === "inventory") {
    icon = (
      <svg
        className="shrink-0 size-6 stroke-black dark:stroke-white fill-black dark:fill-white hover:fill-black"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 -960 960 960"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    );
  }

  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex shrink-0 justify-center size-[46px] items-center gap-2 text-sm font-medium rounded-lg border border-transparent text-white hover:bg-slate-200 focus:outline-none focus:bg-blue-700  disabled:cursor-not-allowed"
      {...(onClickFunction !== undefined
        ? {
            onClick: (e) => {
              e.preventDefault();
              onClickFunction();
            },
          }
        : {})}
    >
      {disabled ? (
        <span
          className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
          role="status"
          aria-label="loading"
        ></span>
      ) : (
        icon
      )}
    </button>
  );
}
