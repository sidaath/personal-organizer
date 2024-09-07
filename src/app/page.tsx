import { Box, Card, CardContent, Grid2 } from "@mui/material";
import NewChecklistItem from "./components/NewChecklistItem";
import CheckList from "./components/checklist/CheckList";
import Inventory from "./components/inventory/Inventory";
import { addChecklistItem } from "@/server/food/checklist";
import { addToInvDirect } from "@/server/food/inventory";

export default async function Home() {
  return (
    <Box sx={{ height: "98vh" }}>
      <Grid2 container spacing={0.5} sx={{ height: "100%" }}>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ height: "100%" }}>
              <Grid2 container sx={{ height: "100%" }}>
                <NewChecklistItem
                  itemType="checklist"
                  formHandler={addChecklistItem}
                />
                <CheckList />
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ height: "100%" }}>
              <Grid2 container sx={{ height: "100%" }}>
                <NewChecklistItem
                  itemType="inventory"
                  formHandler={addToInvDirect}
                />
                <Inventory />
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
