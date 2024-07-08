import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import PageTitle from "../../ui/PageTitle/PageTitle";
import AdministratorAdd from "../../components/AdministratorAdd";
import AdministratorTable from "../../components/AdministratorTable";

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

const Paper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const FixedHeight = styled(Box)(({ theme }) => ({
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export default function Administrator() {
  return (
    <Content>
      <AppBarSpacer />
      <PageTitle title={"Administrators Management"} />
      <ContainerStyled maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <AdministratorAdd />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <AdministratorTable />
          </Grid>
        </Grid>
      </ContainerStyled>
    </Content>
  );
}
