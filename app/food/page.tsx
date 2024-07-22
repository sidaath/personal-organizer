import Inventory from "../ui/food/InventoryList";
import GroceryList from "../ui/food/GroceryList";

export default function Page(){

    return(
        <main>
            <div className="flex flex-col md:flex-row p-2 bg-red-100">
                <div className="md:w-2/3 flex-auto bg-blue-100">
                    To buy
                    <GroceryList/>
                </div>
                <div className="md:w-1/3 flex-auto bg-yellow-100">
                    In stock
                    <Inventory/>
                </div>
            </div>
        </main>
    )
}