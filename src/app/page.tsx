import { Box, Card, CardContent, Grid2 } from "@mui/material";
import NewItem from "./components/NewItem";

export default function Home() {
  return (
    <Box sx={{ height: "98vh" }}>
      <Grid2 container spacing={0.5} sx={{ height: "100%" }}>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Grid2 container>
                <NewItem />
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%" }}>card 2</Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
