"use server";

import { INVENTORY_URL } from "../URL";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";

export async function getInventory(): Promise<[]> {
  console.log("running getInventory");
  try {
    const inventory: Response = await fetch(INVENTORY_URL);
    const data: [] = await inventory.json();
    return data;
  } catch (error) {
    console.log(
      "FAILED: getInventory() : fetch for inventory items at " + INVENTORY_URL
    );
    return [];
  }
}

export async function addToInvDirect(formData: FormData): Promise<number> {
  console.log("running addToInvDirect");
  const newInvItem = {
    itemName: formData.get("itemName")?.toString() || "",
    size: Number(formData.get("size")),
    units: formData.get("unit")?.toString() || "",
    quantity: Number(formData.get("quantity")),
    id: 0,
    expDate: formData.get("exp")
      ? dayjs(formData.get("exp")?.toString()).format("YYYY-MM-DD")
      : null,
  };

  console.log(newInvItem);

  try {
    const response = await fetch(INVENTORY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInvItem),
    });
    const resData = await response.json();
    if (response.status === 201) {
      revalidatePath("/food");
    }
    return response.status;
  } catch (error: any) {
    console.log("FAILED : addToInvDirect(): failed to add inv item");
    return Number(error.cause.errno);
  }
}

export async function editQuantity(itemId: number, val: number) {
  console.log("running editQuantity");
  const value_string: string = "quantity;;" + val.toString();

  try {
    const response = await fetch(INVENTORY_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: itemId, value: value_string }),
    });
  } catch (error) {
    console.log("FAIL : increment : inventory.ts");
    console.log(error);
  }
}
