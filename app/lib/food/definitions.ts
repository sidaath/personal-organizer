import { Dayjs } from "dayjs";

export type InventoryItemType = {
  id: string;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
  expiry: Dayjs | undefined | null;
};

export type ToBuyItemType = {
  id: string;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
};
