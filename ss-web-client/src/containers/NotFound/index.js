import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { styled } from "@mui/system";
import LanguageIcon from "@mui/icons-material/Language";

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#95c2de",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: "120px",
  fontWeight: "bold",
  justifyContent: "center",
}));

const ErrorIcon = styled(LanguageIcon)(({ theme }) => ({
  fontSize: "100px",
  animation: "spin 2s linear infinite",
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const MessageBox = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginTop: theme.spacing(2),
}));

const NotFoundPage = () => {
  return (
    <MainBox>
      <Container>
        <ErrorBox>
          <Box component="span">4</Box>
          <ErrorIcon />
          <Box component="span">4</Box>
        </ErrorBox>
        <MessageBox>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link href="/">home</Link> and try from there.
          </p>
        </MessageBox>
      </Container>
    </MainBox>
  );
};

export default NotFoundPage;
