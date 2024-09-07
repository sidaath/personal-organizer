"use client";
import { Grid2, IconButton, MenuItem, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ExpDateDialog from "./ExpDateSetter";
import { useState } from "react";

export default function NewChecklistItem({
  itemType,
  formHandler,
}: {
  itemType: "checklist" | "inventory";
  formHandler: (formData: FormData) => Promise<Number>;
}) {
  const array = ["kg", "g", "L", "pcs"];
  const [units, setUnits] = useState("kg");

  function handleFormAction(formData: FormData) {
    formHandler(formData);
  }
  return (
    <form action={handleFormAction}>
      <Grid2 container spacing={1} width={"100%"} sx={{ maxHeight: 50 }}>
        <Grid2 size={{ xs: 12, md: itemType === "checklist" ? 5 : 4 }}>
          <TextField
            id="itemName"
            name="itemName"
            variant="standard"
            label="name"
            fullWidth
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: itemType === "checklist" ? 2 : 1.5 }}>
          <TextField
            id="size"
            name="size"
            variant="standard"
            label="size"
            type="number"
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 1 }}>
          <TextField
            id="unit"
            name="unit"
            select
            value={units}
            onChange={(e) => {
              setUnits(e.target.value);
            }}
            label="units"
            variant="standard"
            fullWidth
          >
            {array.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid2>

        <Grid2 size={{ xs: 6, md: itemType === "checklist" ? 2 : 1.5 }}>
          <TextField
            id="quantity"
            name="quantity"
            fullWidth
            label="quantity"
            type="number"
            variant="standard"
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
          />
        </Grid2>

        <Grid2
          size={{ xs: 6, md: itemType === "checklist" ? 2 : 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {itemType === "checklist" && (
            <IconButton color="primary" type="submit">
              <AddTaskIcon />
            </IconButton>
          )}

          {itemType === "inventory" && <ExpDateDialog />}
        </Grid2>

        {itemType === "inventory" && (
          <Grid2
            size={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary" type="submit">
              <InventoryOutlinedIcon />
            </IconButton>
          </Grid2>
        )}
      </Grid2>
    </form>
  );
}
