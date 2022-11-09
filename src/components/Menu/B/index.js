import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";
import { blue } from "@mui/material/colors";

const primary = blue[300];

export default function IconMenuB() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%", backgroundColor: primary }}>
      <MenuList>
        <MenuItem disabled={true}>
          <ListItemText>Terceros</ListItemText>
        </MenuItem>
        <Divider />
        <Link href="/client-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Client List</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/client-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Create Client</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/employee-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Employee list</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/employee-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Create employee</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/supplier-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Supplier list</ListItemText>
          </MenuItem>
        </Link>
        <Link href="/supplier-list" underline="none" color="inherit">
          <MenuItem>
            <ListItemText>Create supllier</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
