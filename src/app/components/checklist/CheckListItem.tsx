"use client";

import { CheckListItemType } from "@/lib/definitions";
import {
  Checkbox,
  FormControlLabel,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";

export default function CheckListItem({ item }: { item: CheckListItemType }) {
  return (
    <Grid2 container>
      <Grid2 size={4}>
        <FormControlLabel control={<Checkbox />} label={item.itemName} />
      </Grid2>
      <Grid2 size={3}>
        <Typography variant="subtitle2">
          {`${item.size}  ${item.units}`}
        </Typography>
      </Grid2>
      <Grid2 size={3}>
        <Typography variant="subtitle2">{item.quantity}</Typography>
      </Grid2>
    </Grid2>
  );
}
