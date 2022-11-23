import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { blue } from "@mui/material/colors";
import { Link } from "@mui/material";

const primary = blue[300];

export default function IconMenuA() {
  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
        backgroundColor: primary,
      }}
    >
      <MenuList>
        <MenuItem disabled={true}>
          <ListItemText>Sales</ListItemText>
        </MenuItem>
        <Divider />
        <Link href="/request-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Request List</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/product-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Product List</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/sale-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Sale List</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/make-sale" underline="none" color="inherit">
          <MenuItem disabled={true}>
            <ListItemText>Make Sale (In process)</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
