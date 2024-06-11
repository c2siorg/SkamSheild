import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/material/styles";

import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Signin(props) {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

      </div>
    </Container>
  );
}
