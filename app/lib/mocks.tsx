'use server'

import { revalidatePath } from "next/cache";

const item1 = {itemName:'Item 1', amount:3, units:'Nos'}
const item2 = {itemName:'Item 2', amount:7, units:'Nos'}
const item3 = {itemName:'Item 3', amount:1, units:'kg'}

let toBuyItemsList = [item1, item2, item3];

export async function addNewItemToBuy(formData: FormData){

    const newItem = {
        itemName : formData.get('itemName')?.toString()||'',
        amount : Number(formData.get('amount')),
        units : formData.get('unit')?.toString() ||''
    }

    console.log("old list")
    console.log(toBuyItemsList)

    if(newItem.itemName && newItem.amount && newItem.units){
        toBuyItemsList = [...toBuyItemsList, newItem]
    }

    console.log("new list")
    console.log(toBuyItemsList)
    revalidatePath('/food')
}

export async function getToBuyList(){
    return toBuyItemsList;
}