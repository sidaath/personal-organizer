'use server'

import { revalidatePath } from "next/cache";
/* GLOBAL Id STUFF*/
let temp = 10;

/* */

/* Mocks for the to buy grocery list*/
const item1 = {itemName:'Item 1', size:3, units:'Nos', quantity:3, id:'1'}
const item2 = {itemName:'Item 2', size:7, units:'Nos', quantity:6, id:'2'}
const item3 = {itemName:'Item 3', size:1, units:'kg', quantity: 2, id:'3'}

let toBuyItemsList = [item1, item2, item3];

export async function addNewItemToBuy(formData: FormData){

    const newItem = {
        itemName : formData.get('itemName')?.toString()||'',
        size : Number(formData.get('size')),
        units : formData.get('unit')?.toString() ||'',
        quantity:Number(formData.get('quantity')),
        id: temp.toString()
    }

    temp = temp + 1
    console.log("new temp = "+temp)

    console.log("old list")
    console.log(toBuyItemsList)
    
    toBuyItemsList = [...toBuyItemsList, newItem]
    

    console.log("new list")
    console.log(toBuyItemsList)
    revalidatePath('/food')
}

export async function getToBuyList(){
    return toBuyItemsList;
}

async function removeFromToBuy(itemId:string){
    const index = toBuyItemsList.findIndex(x => x.id===itemId)
    toBuyItemsList.splice(index, 1)
}


/* Mocks for the inventory list*/
const invItem1 = {itemName:'Inv Item 1', size:7, units:'Nos', quantity:12, id:'4'}
const invItem2 = {itemName:'Inv Item 2', size:14, units:'Nos', quantity:1, id:'5'}
const invItem3 = {itemName:'Inv Item 3', size:3, units:'kg', quantity: 98, id:'6'}

let inventory = [invItem1, invItem2, invItem3]

export async function getInventory(){
    return inventory;
}

export async function addToInventory(formData: FormData){

    const newInvItem = {
        itemName : formData.get('itemName')?.toString()||'',
        size : Number(formData.get('size')),
        units : formData.get('unit')?.toString() ||'',
        quantity:Number(formData.get('quantity')),
        id : formData.get('id')?.toString()||''
    }
    
    console.log("Old inv")
    console.log(inventory)

    inventory = [...inventory,  newInvItem]
    removeFromToBuy(newInvItem.id)

    console.log("new inv")
    console.log(inventory)
    revalidatePath('/food')

}