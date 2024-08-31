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
  } catch (error: any) {
    console.error(
      "FAILED: getToBuyList() : fetch for checklist items at " + CHECKLIST_URL
    );
    console.log(error.cause);
    return [];
  }
}

export async function addToInventory(formData: FormData): Promise<Number> {
  console.log("running add to inventory from checklist");
  const id = Number(formData.get("id"));
  try {
    const response: Response = await fetch(CHECKLIST_URL, {
      method: "PATCH",
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
    console.log(error.cause);
    return Number(error.cause.errno);
  }
}

export async function addNewItemToBuy(formData: FormData): Promise<Number> {
  console.log("ruinning addNewItemToBuy");
  const newItem = {
    itemName: formData.get("itemName")?.toString() || "",
    size: Number(formData.get("size")),
    units: formData.get("unit")?.toString() || "",
    quantity: Number(formData.get("quantity")),
    id: 1,
  };

  try {
    const response = await fetch(CHECKLIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    if (response.status == 201) {
      revalidatePath("/food");
    }
    return response.status;
  } catch (error: any) {
    console.error("FAILED : addNewItemToBuy() : chekclist");
    console.log(error.cause);
    return error.cause.errno;
  }
}
