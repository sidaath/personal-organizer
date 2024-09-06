import { Grid2, IconButton, MenuItem, TextField } from "@mui/material";

import AddTaskIcon from "@mui/icons-material/AddTask";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ExpDateDialog from "./ExpDateSetter";

export default function NewChecklistItem({
  itemType,
}: {
  itemType: "checklist" | "inventory";
}) {
  const array = ["kg", "g", "L", "pcs"];
  return (
    <Grid2 container spacing={1} width={"100%"}>
      <Grid2 size={{ xs: 12, md: itemType === "checklist" ? 5 : 4 }}>
        <TextField variant="standard" label="name" fullWidth />
      </Grid2>

      <Grid2 size={{ xs: 6, md: itemType === "checklist" ? 2 : 1.5 }}>
        <TextField
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
          select
          label="unit"
          defaultValue={"pcs"}
          variant="standard"
          fullWidth
        >
          {array.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </TextField>
      </Grid2>

      <Grid2 size={{ xs: 6, md: itemType === "checklist" ? 2 : 1.5 }}>
        <TextField
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
          <IconButton color="primary">
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
          <IconButton color="primary">
            <InventoryOutlinedIcon />
          </IconButton>
        </Grid2>
      )}
    </Grid2>
  );
}
