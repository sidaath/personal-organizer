"use client";

import { CheckListItemType } from "@/lib/definitions";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpDateDialog from "../ExpDateSetter";
import {
  Add,
  Delete,
  DeleteForever,
  DeleteOutline,
  Remove,
} from "@mui/icons-material";
import { addToInventory, deleteItem } from "@/server/food/checklist";

export default function CheckListItem({ item }: { item: CheckListItemType }) {
  const [checked, setChecked] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [qty, setQty] = useState<number>(item.quantity);

  function submitItem(formData: FormData) {
    console.log(item.id);
    console.log(formData.get("expDate"));
    addToInventory(item, formData);
  }

  return (
    <Grid2 container>
      <Grid2 size={4}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                if (event.target.checked) {
                  setChecked(true);
                  setDialog(true);
                }
              }}
              checked={checked}
            />
          }
          label={item.itemName}
        />
      </Grid2>
      <Grid2 size={3} alignContent={"center"}>
        <Typography variant="subtitle2">
          {`${item.size}  ${item.units}`}
        </Typography>
      </Grid2>
      <Grid2 size={3} alignContent={"center"}>
        <Typography variant="subtitle2">{item.quantity}</Typography>
      </Grid2>
      <Grid2 size={2}>
        <IconButton
          onClick={() => {
            deleteItem(item.id);
          }}
        >
          <DeleteOutline />
        </IconButton>
      </Grid2>
      <Dialog open={dialog} fullWidth>
        <form action={submitItem}>
          <DialogContent>
            <DialogTitle>Expiry & Quantity</DialogTitle>
            <Grid2 container spacing={2} size={12}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <ExpDateDialog />
              </Grid2>
              <Grid2 container size={{ xs: 12, md: 6 }}>
                <Grid2 size={{ xs: 4, md: 4 }}>
                  <IconButton
                    onClick={() => {
                      setQty((cur) => {
                        cur = cur - 1;
                        item.quantity = cur;
                        return cur;
                      });
                    }}
                  >
                    <Remove />
                  </IconButton>
                </Grid2>
                <Grid2 size={{ xs: 4, md: 4 }}>
                  <TextField value={qty} />
                </Grid2>
                <Grid2 size={{ xs: 4, md: 4 }}>
                  <IconButton
                    onClick={() => {
                      setQty((cur) => {
                        cur = cur + 1;
                        item.quantity = cur;
                        return cur;
                      });
                    }}
                  >
                    <Add />
                  </IconButton>
                </Grid2>
              </Grid2>
            </Grid2>
            <DialogActions>
              <Button
                onClick={() => {
                  setChecked(false);
                  setDialog(false);
                }}
              >
                Close
              </Button>
              <Button type="submit">Add to Inv</Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </Grid2>
  );
}
