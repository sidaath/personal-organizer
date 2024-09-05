import { Box, Card, Container, Grid2 } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height: "98vh", bgcolor: "red" }}>
      <Grid2 container spacing={0.5} sx={{ height: "100%", bgcolor: "yellow" }}>
        <Grid2 size={6} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%" }}>card 1 a</Card>
        </Grid2>
        <Grid2 size={6}>
          <Card sx={{ height: "100%" }}>card 2</Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
