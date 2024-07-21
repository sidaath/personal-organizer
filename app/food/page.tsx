import GroceryList from "../ui/food/to-buy";

export default function Page(){

    return(
        <main>
            <div className="grid md:grid-cols-2 p-4">
                <div>
                    To buy
                    <GroceryList/>
                </div>
                <div>
                    In stock
                </div>
            </div>
        </main>
    )
}