import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Page() {
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
        お問い合わせありがとうございました
      </Typography>
      <Typography sx={{ mb: 2 }}>お問い合わせ内容を受け付けました。</Typography>
      <Button variant="contained" href="/">
        ホームに戻る
      </Button>
    </Box>
  );
}
