"use client";

import { deleteItem } from "@/server/food/inventory";
import { DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams, GridRowParams } from "@mui/x-data-grid";
import { ReactNode } from "react";

export function renderDeleteItemBtn({
  row,
}: {
  row: Partial<GridRowParams>;
}): ReactNode {
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        console.log(row);
        deleteItem(Number(row.id));
      }}
    >
      <DeleteOutlined />
    </IconButton>
  );
}
