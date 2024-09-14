import { Dayjs } from "dayjs";

export type InventoryItemType = {
  id: number;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
  expDate: Dayjs | null;
};

export type DisplayInventoryItemType = {
  id: number;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
  expDate: string;
};

export type CheckListItemType = {
  id: number;
  itemName: string;
  size: number;
  units: string;
  quantity: number;
};
