import React from "react";
import { styled } from "@mui/system";
import { Container, Grid, Box } from "@mui/material";
import ReviewsCardList from "../../components/ReviewsCardList";
import PageTitle from "../../ui/PageTitle/PageTitle";

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
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default function Reviews() {
  //   let { path } = useRouteMatch();

  return (
    <Content>
      <AppBarSpacer />
      {/* <PageTitle title={"Reviews"} /> */}
      <CustomContainer maxWidth="lg">
        <Grid container spacing={3}>
          <ReviewsCardList />
        </Grid>
      </CustomContainer>
    </Content>
  );
}
