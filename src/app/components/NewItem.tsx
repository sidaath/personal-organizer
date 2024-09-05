import {
  Box,
  Container,
  FilledInput,
  Grid,
  Grid2,
  MenuItem,
  TextField,
} from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function NewItem() {
  const array = ["kg", "g", "L"];
  return (
    <Grid2 container spacing={1} width={"100%"}>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <TextField variant="standard" label="name" fullWidth />
      </Grid2>

      <Grid2 size={{ xs: 6, md: 2 }}>
        <TextField variant="standard" label="size" />
      </Grid2>

      <Grid2 size={{ xs: 6, md: 1 }}>
        <TextField
          select
          label="unit"
          defaultValue={"Pcs"}
          variant="standard"
          fullWidth
        >
          {array.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </TextField>
      </Grid2>

      <Grid2 size={{ xs: 6, md: 2 }}>
        <TextField
          fullWidth
          label="quantity"
          type="number"
          variant="standard"
        />
      </Grid2>

      <Grid2
        size={{ xs: 6, md: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AddTaskIcon sx={{ justifySelf: "center" }} />
      </Grid2>
    </Grid2>
  );
}
