"use server";

import { CHECKLIST_URL } from "../URL";
import { ToBuyItemType } from "@/app/lib/food/definitions";

export async function getToBuyList(): Promise<[ToBuyItemType] | []> {
  console.log("running getToBuyList");
  try {
    const inventory: Response = await fetch(CHECKLIST_URL);
    const data: [] = await inventory.json();
    return data;
  } catch (error) {
    console.log(
      "FAILED: getToBuyList() : fetch for checklist items at " + CHECKLIST_URL
    );
    return [];
  }
}
