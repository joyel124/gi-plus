import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TableCrudV2 from "../../../components/TableCrudV2";
import { Grid } from "@mui/material";

export default function ClientList() {
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
          <TableCrudV2 />
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
