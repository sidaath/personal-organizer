import { Grid2, Typography } from "@mui/material";
import { getChecklist } from "../../../server/food/checklist";
import CheckListItem from "./CheckListItem";

export default async function CheckList() {
  const data = await getChecklist();

  if (data.length > 0) {
    return (
      <Grid2
        container
        sx={{ height: "100%", width: "100%", overflowY: "auto" }}
        marginTop={3}
        alignContent={"start"}
      >
        <Grid2 size={4}>
          <Typography variant="h6">Item</Typography>
        </Grid2>
        <Grid2 size={3}>
          <Typography variant="h6">Size</Typography>
        </Grid2>
        <Grid2 size={3}>
          <Typography variant="h6">Quantity</Typography>
        </Grid2>
        {data.map((item) => {
          return (
            <Grid2 size={12} key={item.id}>
              <CheckListItem item={item} />
            </Grid2>
          );
        })}
      </Grid2>
    );
  } else {
    return (
      <Grid2
        container
        sx={{ height: "100%", width: "100%", overflowY: "auto" }}
        marginTop={3}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Typography>NO ITEMS TO DISPLAY</Typography>
      </Grid2>
    );
  }
}
