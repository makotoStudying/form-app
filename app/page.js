import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        Mako&apos;s Blog Contact Form
      </Typography>
      <Button variant="outlined" href="/form">
        Contact form
      </Button>
    </Box>
  );
}
