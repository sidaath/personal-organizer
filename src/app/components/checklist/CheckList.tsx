import { Grid2 } from "@mui/material";
import { getChecklist } from "../../../server/food/checklist";
import CheckListItem from "./CheckListItem";

export default async function CheckList() {
  const data = await getChecklist();

  return (
    <Grid2 container>
      {data.map((item) => {
        return (
          <Grid2 size={12} key={item.id}>
            <CheckListItem item={item} />
          </Grid2>
        );
      })}
    </Grid2>
  );
}
