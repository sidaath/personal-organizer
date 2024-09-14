import { InventoryItemType } from "@/lib/definitions";
import { renderDeleteItemBtn } from "@/lib/grid_delete_row";
import { editQuantity, getDisplayInventory } from "@/server/food/inventory";
import { Button } from "@mui/material";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";

export default async function Inventory() {
  const data: [InventoryItemType] | [] = await getDisplayInventory();

  const cols: GridColDef[] = [
    { field: "itemName", headerName: "Item", width: 250 },
    { field: "size", headerName: "Size" },
    { field: "quantity", headerName: "Quantity", editable: true },
    { field: "expDate", headerName: "Expiry Date" },
    {
      field: "action",
      headerName: "Delete",
      sortable: false,
      renderCell: renderDeleteItemBtn,
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={cols}
      sx={{ marginTop: 4 }}
      processRowUpdate={editQuantity}
    />
  );
}

//TODO
//add validation for type in forRows
//make more efficient - cache/memoization for forRows
