import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IconMenuA from "../../components/Menu/A";
import IconMenuB from "../../components/Menu/B";
import { Grid } from "@mui/material";
import * as React from "react";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Grid container spacing={0} columns={{ xs: 8, sm: 16 }} minHeight={1000}>
        <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
          <IconMenuA />
        </Grid>
        <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
          <IconMenuB />
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
