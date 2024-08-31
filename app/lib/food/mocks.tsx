"use server";

import dayjs from "dayjs";
import { revalidatePath } from "next/cache";
import { InventoryItemType } from "./definitions";

import { INVENTORY_URL } from "@/app/server/URL";
/* GLOBAL Id STUFF*/
let temp = 10;

/* */

/* Mocks for the to buy grocery list*/
// const item1 = {
//   itemName: "Item 1",
//   size: 3,
//   units: "pack",
//   quantity: 3,
//   id: "1",
// };
// const item2 = {
//   itemName: "Item 2",
//   size: 7,
//   units: "pack",
//   quantity: 6,
//   id: "2",
// };
// const item3 = {
//   itemName: "Item 3",
//   size: 1,
//   units: "kg",
//   quantity: 2,
//   id: "3",
// };

// let toBuyItemsList = [item1, item2, item3];

// export async function addNewItemToBuy(formData: FormData) {
//   console.log("ruinning addNewItemToBuy");
//   const newItem = {
//     itemName: formData.get("itemName")?.toString() || "",
//     size: Number(formData.get("size")),
//     units: formData.get("unit")?.toString() || "",
//     quantity: Number(formData.get("quantity")),
//     id: temp.toString(),
//   };

//   temp = temp + 1;
//   console.log("start wait");
//   const wait = (ms: number) =>
//     new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });

//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("end wait");
//   toBuyItemsList = [...toBuyItemsList, newItem];
//   revalidatePath("/food");
// }

// export async function removeFromToBuy(itemId: string) {
//   console.log("running removeFromToBuy");
//   const index = toBuyItemsList.findIndex((x) => x.id === itemId);
//   toBuyItemsList.splice(index, 1);
// }

/* Mocks for the inventory list*/
const invItem1 = {
  itemName: "Inv Item 1",
  size: 7,
  units: "Nos",
  quantity: 12,
  id: "4",
  expiry: null,
};
const invItem2 = {
  itemName: "Inv Item 2",
  size: 14,
  units: "Nos",
  quantity: 1,
  id: "5",
  expiry: dayjs("2024-10-29"),
};
const invItem3 = {
  itemName: "Inv Item 3",
  size: 3,
  units: "kg",
  quantity: 98,
  id: "6",
  expiry: null,
};

let inventory = [invItem1, invItem2, invItem3];

// export async function getInventory() {
//   console.log("running getInventory");
//   return JSON.parse(JSON.stringify(inventory));
// }

// export async function addToInvDirect(formData: FormData) {
//   console.log("running addToInvDirect");
//   const newInvItem = {
//     itemName: formData.get("itemName")?.toString() || "",
//     size: Number(formData.get("size")),
//     units: formData.get("unit")?.toString() || "",
//     quantity: Number(formData.get("quantity")),
//     id: temp.toString(),
//     expiry: formData.get("exp") ? dayjs(formData.get("exp")?.toString()) : null,
//   };

//   temp++;

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   inventory = [...inventory, newInvItem];
//   revalidatePath("/food");
// }

export async function increment(itemId: string) {
  console.log("running increment");
  const index = inventory.findIndex((x) => x.id === itemId);
  inventory[index].quantity = inventory[index].quantity + 1;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/food");
}

export async function decrement(itemId: string) {
  console.log("running decrement");
  const index = inventory.findIndex((x) => x.id === itemId);
  inventory[index].quantity = inventory[index].quantity - 1;
  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/food");
}
