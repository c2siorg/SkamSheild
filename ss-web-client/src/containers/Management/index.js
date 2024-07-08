import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PageTitle from "../../ui/PageTitle/PageTitle";
import AttendaceTable from "../../components/ManageScamDataTable";
// import TaskTable from "../../components/TaskTable";
// import TaskAdd from "../../components/TaskAdd";

const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
}));

const AppBarSpacer = styled("div")(({ theme }) => theme.mixins.toolbar);

const ContainerStyled = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const PaperStyled = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

const FixedHeight = styled("div")(({ theme }) => ({
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export default function Management() {
  return (
    <Content>
      <AppBarSpacer />
      <PageTitle title={"Scam/ Spam Data Management"} />
      <ContainerStyled maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <AttendaceTable />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
          </Grid>
        </Grid>
      </ContainerStyled>
    </Content>
  );
}
