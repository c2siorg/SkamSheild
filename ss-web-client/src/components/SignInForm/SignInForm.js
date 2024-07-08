import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
// import { useHistory } from "react-router-dom";
import TextInput from "../../ui/TextInput/TextInput";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Avatar, IconButton, InputAdornment, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Typography } from "@mui/material";
import { validate } from "../../utils/utils";

import schema from "./signinValidateScheme";
// import { Link } from "react-router-dom";

import COMPANY_LOGO from "../../assests/companyLogo2.png";

// Styled Avatar component
const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  // backgroundColor: theme.palette.secondary.main,
}));

// Styled Button component
const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function SignInForm() {
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
    const newErrorObject = validate(userData, schema);
    if (Object.keys(newErrorObject).length > 0) {
      setError(newErrorObject);
      return false;
    }
    return true;
  };

  return (
    <>
      {/* <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar> */}
      <AvatarStyled alt={"#"} src={COMPANY_LOGO} />
      <Typography style={{ marginBottom: "15px" }} component="h1" variant="h5">
        User Login
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextInput
            label="Username"
            name="email"
            autoFocus={true}
            // error={error.username}
            size="large"
            value={uname}
            // onFocus={() => delete error["username"]}
            // onBlur={() =>
            //   setError({ ...error, ...validate({ username: uname }, schema) })
            // }
            // helperText={error.username}
            onChange={(e) => setUname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextInput
            label="Password"
            name="password"
            size="large"
            // error={error.password}
            // onFocus={() => {
            //   delete error["password"];
            //   // console.log(error);
            // }}
            // onBlur={() =>
            //   setError({
            //     ...error,
            //     ...validate({ password: password }, schema),
            //   })
            // }
            // helperText={error.password}
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
      <SubmitButton
        disabled={authLoading}
        fullWidth
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Login
      </SubmitButton>
      <Grid container>
        <Grid item xs>
          {/* <Link to={`/`}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ArrowBackOutlinedIcon />
                  <Typography>Back to home</Typography>
                </div>
              </Link> */}
        </Grid>
        <Grid item>
          {/* <Link style={{ color: 'inherit', textDecoration: 'underline', }} to={`/`}>
            <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
              <Typography>Forgot Password</Typography>
            </div>
          </Link> */}
        </Grid>
      </Grid>
    </>
  );
}
