"use server";

import { INVENTORY_URL } from "../URL";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";
import { DisplayInventoryItemType, InventoryItemType } from "@/lib/definitions";

export async function getInventory(): Promise<[]> {
  console.log("running getInventory");
  try {
    const inventory: Response = await fetch(INVENTORY_URL);
    const data: [] = await inventory.json();
    return data;
  } catch (error: any) {
    console.error(
      "FAILED: getInventory() : fetch for inventory items at " + INVENTORY_URL
    );
    console.log(error.cause);
    return [];
  }
}

export async function getDisplayInventory(): Promise<[]> {
  console.log("running getInventory");
  try {
    const inventory: Response = await fetch(INVENTORY_URL);
    const data: [] = await inventory.json();
    if (data) {
      data.map((item: InventoryItemType | DisplayInventoryItemType) => {
        item.expDate ? null : (item.expDate = "X");
      });
    }
    return data;
  } catch (error: any) {
    console.error(
      "FAILED: getInventory() : fetch for inventory items at " + INVENTORY_URL
    );
    console.log(error.cause);
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
    expDate: formData.get("expDate")
      ? dayjs(formData.get("exp")?.toString()).format("YYYY-MM-DD")
      : null,
    price: null,
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
      revalidatePath("/");
    }
    return response.status;
  } catch (error: any) {
    console.error("FAILED : addToInvDirect(): failed to add inv item");
    console.log(error.cause);
    return Number(error.cause.errno);
  }
}

export async function editQuantity(
  newrow: InventoryItemType,
  oldrow: InventoryItemType
): Promise<InventoryItemType> {
  console.log("running editQuantity");
  const value_string: string = "quantity;;" + newrow.quantity;

  try {
    const response = await fetch(INVENTORY_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: newrow.id, value: value_string }),
    });
    const data = await response.json();
    if (response.status === 202) {
      revalidatePath("/");
      return { ...newrow };
    } else {
      return { ...oldrow };
    }
  } catch (error: any) {
    console.error("FAIL : editQuantity : inventory.ts");
    console.log(error.cause);
    return { ...oldrow };
  }
}

export async function deleteItem(id: number) {
  const URI = INVENTORY_URL + "/" + id;
  try {
    const response = await fetch(URI, {
      method: "DELETE",
    });
    if (response.status === 200) {
      revalidatePath("/");
    }
  } catch (error: any) {
    console.error("FAILED : deleteItem() : invenetory");
    console.log(error.cause);
    return error.cause.errno;
  }
}
