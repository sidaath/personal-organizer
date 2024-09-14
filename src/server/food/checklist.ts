"use server";

import { CHECKLIST_URL } from "../URL";
import { CheckListItemType } from "@/lib/definitions";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";

export async function getChecklist(): Promise<[CheckListItemType] | []> {
  console.log("running getChecklist");
  try {
    const inventory: Response = await fetch(CHECKLIST_URL);
    const data: [] = await inventory.json();
    return data;
  } catch (error: any) {
    console.error(
      "FAILED: getChecklist() : fetch for checklist items at " + CHECKLIST_URL
    );
    console.log(error.cause);
    return [];
  }
}

export async function addToInventory(
  item: CheckListItemType,
  formData: FormData
): Promise<Number> {
  console.log("running add to inventory from checklist");

  let expDate = null;
  formData.get("expDate") !== null
    ? (expDate = dayjs(formData.get("exp")?.toString()).format("YYYY-MM-DD"))
    : null;
  const id = item.id;

  try {
    const response: Response = await fetch(CHECKLIST_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        exp_date: expDate,
        quantity: item.quantity,
      }),
    });

    if (response.status == 201) {
      revalidatePath("/");
    }
    return response.status;
  } catch (error: any) {
    console.error("FAILED : addToInventory() : server/checklist");
    console.log(error.cause);
    return Number(error.cause.errno);
  }
}

export async function addChecklistItem(formData: FormData): Promise<Number> {
  console.log("running addChecklistItem");
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
      revalidatePath("/");
    }
    return response.status;
  } catch (error: any) {
    console.error("FAILED : addChecklistItem() : chekclist");
    console.log(error.cause);
    return error.cause.errno;
  }
}

export async function deleteItem(id: number) {
  const uri = CHECKLIST_URL + "/" + id;
  try {
    const response = await fetch(uri, {
      method: "DELETE",
    });
    if (response.status === 200) {
      revalidatePath("/");
    }
  } catch (error: any) {
    console.error("FAILED : deleteItem() : checklist");
    console.log(error.cause);
    return error.cause.errno;
  }
}
