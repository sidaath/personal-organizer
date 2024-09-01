import { Dayjs } from "dayjs";

export type InventoryItemType = {
  id: number;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
  expDate: Dayjs | null;
};

export type ToBuyItemType = {
  id: number;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
};
