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
          <ListItemText>Solicitudes</ListItemText>
        </MenuItem>
        <Divider />
        <Link href="/state-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>State list</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/state-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Create states</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/request-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>List type of request</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/request-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Create request type</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/request-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Create request</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
