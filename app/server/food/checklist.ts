"use server";

import { CHECKLIST_URL } from "../URL";
import { ToBuyItemType } from "@/app/lib/food/definitions";
import { revalidatePath } from "next/cache";

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

export async function addToInventory(formData: FormData): Promise<Number> {
  console.log("running add to inventory from checklist");
  const id = Number(formData.get("id"));
  try {
    const response: Response = await fetch(CHECKLIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    if (response.status == 201) {
      revalidatePath("/food");
    }
    return response.status;
  } catch (error: any) {
    console.error("FAILED : addToInventory() : server/checklist");
    console.log(error);
    return Number(error.cause.errno);
  }
}

//TODO : ADDNEWITEMTOBUY
