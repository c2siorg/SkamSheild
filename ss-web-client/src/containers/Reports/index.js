import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PageTitle from "../../ui/PageTitle/PageTitle";
import ReportsTable from "../../components/ReportsTable";

const AppBarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default function Reports() {
  return (
    <Content>
      <AppBarSpacer />
      <PageTitle title={"Reports Management"} />
      <ContainerStyled maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <ReportsTable />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            {/* <EmployeeTable /> */}
          </Grid>
        </Grid>
      </ContainerStyled>
    </Content>
  );
}
