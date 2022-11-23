import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TableCrud from "../../../components/TableCrud/Sale";
import { Grid } from "@mui/material";

export default function SaleList() {
  return (
    <>
      <Header></Header>
      <Grid container spacing={0} columns={{ xs: 8, sm: 16 }} minHeight={1000}>
        <Grid
          xs={16}
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={20}
        >
          <TableCrud />
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
