import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/material/styles";
import TextInput from "../../ui/TextInput/TextInput";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Avatar, IconButton, InputAdornment, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validate } from "../../utils/utils";

import schema from "./signinValidateScheme";

import COMPANY_LOGO from '../../assests/companyLogo2.png';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
}));

export default function SignInForm() {
  const classes = useStyles();

  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({});

  const { signIn, initializing, authLoading } = useContext(AuthContext);

  const onSubmit = () => {
    let userData = { username: uname, password: password };
    if (!validateUserData(userData)) {
      return;
    }
    signIn(uname, password);
  };

  const validateUserData = (userData) => {
    const newErrorObject = validate(
      userData,
      schema
    );
    if (Object.keys(newErrorObject).length > 0) {
      setError(newErrorObject);
      return false;
    }
    return true;
  }

  return (
    <>
      <Avatar
        className={classes.avatar}
        alt={"#"}
        src={COMPANY_LOGO}
      />
      <Typography
        style={{ marginBottom: "15px" }}
        component="h1"
        variant="h5"
      >
        User Login
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextInput
            label="Username"
            name="email"
            autoFocus={true}
            error={error.username}
            size="large"
            value={uname}
            onFocus={() => delete error["username"]}
            onBlur={() =>
              setError({ ...error, ...validate({ username: uname }, schema) })
            }
            helperText={error.username}
            onChange={(e) => setUname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextInput
            label="Password"
            name="password"
            size="large"
            error={error.password}
            onFocus={() => {
              delete error["password"];
            }}
            onBlur={() =>
              setError({
                ...error,
                ...validate({ password: password }, schema),
              })
            }
            helperText={error.password}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onTouchStartCapture={() => setShowPassword(true)}
                    onTouchEnd={() => setShowPassword(false)}
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Button
        disabled={authLoading}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={onSubmit}
      >
        Login
      </Button>
      <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </>
  );
}
