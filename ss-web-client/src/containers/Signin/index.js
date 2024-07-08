import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import Footer from "../../components/Footer/Footer";
import SignInForm from "../../components/SignInForm/SignInForm";
import { Container } from "@mui/material";

const Paper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function Signin(props) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <SignInForm />
        <Box mt={8}>
          <Footer />
        </Box>
      </Paper>
    </Container>
  );
}
