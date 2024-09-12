"use client";

import { FormControlLabel, Switch, ToggleButton } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
export default function ExpDateDialog() {
  const [checked, setChecked] = useState<boolean>(false);

  function clearDate() {
    setChecked((cur) => {
      return !cur;
    });
  }
  return (
    <>
      {!checked && (
        <FormControlLabel
          value="start"
          control={
            <Switch
              checked={checked}
              onChange={() => {
                setChecked((cur) => {
                  return !cur;
                });
              }}
            />
          }
          label="Expiring"
        />
      )}
      {checked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name="expDate"
            label="Exp Date"
            defaultValue={dayjs(Date.now())}
            slotProps={{ field: { clearable: true, onClear: clearDate } }}
          />
        </LocalizationProvider>
      )}
    </>
  );
}
