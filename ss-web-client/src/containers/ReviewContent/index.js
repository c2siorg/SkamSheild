import React from "react";
import { styled } from "@mui/system";
import { Container, Grid, Box } from "@mui/material";

import PageTitle from "../../ui/PageTitle/PageTitle";
import CustomTab from "../../ui/CustomTab/CustomTab";
import CustomTabPanel from "../../ui/CustomTabPanel/CustomTabPanel";
import ReviewPhoneScamContent from "./ReviewPhoneScamContent";
import ReviewEmailScamContent from "./ReviewEmailScamContent";

const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
  backgroundColor: theme.palette.background.default,
}));

const AppBarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export default function ReviewContent() {
  //   let { path } = useRouteMatch();

  return (
    <Content>
      <AppBarSpacer />
      {/* <PageTitle title={"Review"} /> */}
      {/* <CustomContainer maxWidth="lg">
        <Grid container spacing={3}> */}
      <CustomTab labels={["Review", "Further Assesment"]}>
        <ReviewEmailScamContent />
        <ReviewPhoneScamContent />
      </CustomTab>
      {/* </Grid>
      </CustomContainer> */}
    </Content>
  );
}
