"use client";

import { CheckListItemType } from "@/lib/definitions";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function CheckListItem({ item }: { item: CheckListItemType }) {
  return <FormControlLabel control={<Checkbox />} label={item.itemName} />;
}
