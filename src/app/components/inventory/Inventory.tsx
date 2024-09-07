import { InventoryItemType } from "@/lib/definitions";
import { getInventory } from "@/server/food/inventory";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default async function Inventory() {
  const data: [InventoryItemType] | [] = await getInventory();
  const forRows: Object[] = [];
  if (data) {
    data.map((item: InventoryItemType) => {
      forRows.push({
        id: item.id,
        itemName: item.itemName,
        quantity: item.quantity,
        expDate: item.expDate ? item.expDate : "X",
        size: `${item.size} ${item.units}`,
      });
    });
  }

  const cols: GridColDef[] = [
    { field: "itemName", headerName: "Item", width: 250 },
    { field: "size", headerName: "Size" },
    { field: "quantity", headerName: "Quantity" },
    { field: "expDate", headerName: "Expiry Date" },
  ];

  const rows: GridRowsProp = forRows;

  return <DataGrid rows={rows} columns={cols} sx={{ marginTop: 5 }} />;
}

//TODO
//add validation for type in forRows
//make more efficient - cache/memoization for forRows
