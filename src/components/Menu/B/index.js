import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
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
        <MenuItem>
          <ListItemText>Copy</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Paste</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
