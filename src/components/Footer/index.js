import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    /*<Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 400,
        letterSpacing: "0rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://gi-plus.joyel.me/">
        Gi-Plus
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>*/
    <Typography
      fontSize={15}
      color="white"
      fontWeight={700}
      fontFamily="monospace"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://gi-plus.joyel.me/">
        Gi-Plus
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        minWidth: "100%",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#1976d2",
          /*backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.blue[800],*/
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
