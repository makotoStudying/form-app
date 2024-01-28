"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
        エラーが発生しました。
      </Typography>
      <Typography sx={{ mb: 2 }}>
        入力内容を確認してやり直すか、時間をおいてから再度送信してください。
      </Typography>
      <Button
        variant="contained"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
