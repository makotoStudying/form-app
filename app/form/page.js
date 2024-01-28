import { postContactForm } from "@/lib/actions";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  return (
    <>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Contact
        </Typography>

        <form action={postContactForm}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiTextField-root": { m: 2, width: "30ch" },
            }}
          >
            <TextField
              id="name"
              name="name"
              type="text"
              label="名前"
              required
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="e-mail"
              required
            />
            <TextField
              id="content"
              name="content"
              label="お問い合わせ内容"
              multiline
              rows={4}
              required
            />
            <Button variant="contained" type="submit">
              送信する
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
