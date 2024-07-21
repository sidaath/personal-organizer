import GroceryItem from "./to-buy-item"

export default function GroceryList(){
    const groceryList = ['item 1', 'item 2', 'item 3', 'item 4','item 5', 'item 6', 'item 7', 'item 8']
    return( 
        <main className="p-3">
            {groceryList.map(item => 
                <GroceryItem itemName={item} key={item}/>
            )}
        </main>
    )
}