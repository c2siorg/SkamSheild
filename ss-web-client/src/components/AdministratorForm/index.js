import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { CircularProgress, Divider } from "@mui/material";

// ui
import TextInput from "../../ui/TextInput/TextInput";

//context
import { AdministratorContext } from "../../context/AdministratorContext/AdministratorContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";

//validate
import { validate } from "../../utils/utils";

// validate schema
import schemaDefault, { schemaNormal } from "../../validation/administrator";

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function AdministratorForm(props) {
  const {
    selectedAdministrator,
    setAdministratorData,
    updateAdministratorData,
    loading,
  } = useContext(AdministratorContext);
  const { createUserByAdmin, authLoading } = useContext(AuthContext);

  const { action, setOpen } = props;

  const [error, setError] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createdBy, setCreatedBy] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [modifiedBy, setModifiedBy] = useState(null);
  const [modifiedAt, setModifiedAt] = useState(null);

  const OnSubmit = async () => {
    setError({});
    let userData = {
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    let userValidationData =
      action === 0
        ? {
            ...userData,
            password: password,
            confirmPassword: confirmPassword,
          }
        : userData;
    if (
      action === 0
        ? !validateUserData(userValidationData, schemaDefault)
        : !validateUserData(userValidationData, schemaNormal)
    ) {
      console.log("invalid data");
      return;
    }
    userData = { ...userData, isAdmin: true };
    let userAuthData = { email: email, password: password };
    if (action === 0) {
      let response = await createUserByAdmin(userAuthData);
      if (response && response.success) {
        setAdministratorData(response.userRecord.uid, userData);
      }
    } else {
      updateAdministratorData(selectedAdministrator.id, userData);
    }
    setOpen(false);
  };

  const validateUserData = (userData, schema) => {
    const newErrorObject = validate(userData, schema);
    if (Object.keys(newErrorObject).length > 0) {
      setError(newErrorObject);
      return false;
    }
    return true;
  };

  // pre populate data
  const populateData = () => {
    if (action === 1) {
      setName(selectedAdministrator.name);
      setEmail(selectedAdministrator.email);
      setAddress(selectedAdministrator.address);
      setPhoneNumber(selectedAdministrator.phoneNumber);
      setCreatedBy(selectedAdministrator.createdBy);
      setCreatedAt(selectedAdministrator.createdAt);
      setModifiedBy(selectedAdministrator.modifiedBy);
      setModifiedAt(selectedAdministrator.modifiedAt);
    }
  };

  const readOnlyInputProps = { readOnly: true };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            name="name"
            error={error.name}
            helperText={error.name}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            name="email"
            error={error.email}
            InputProps={action === 1 && readOnlyInputProps}
            helperText={error.email}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <TextInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="Phone Number"
            name="phoneNumber"
            error={error.phoneNumber}
            helperText={error.phoneNumber}
          />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <TextInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            multiline={true}
            rows={5}
            rowsMax={5}
            label="Address"
            name="address"
            error={error.address}
            helperText={error.address}
          />
        </Grid>

        {action === 0 && (
          <>
            <Grid item xs={12} md={6} lg={6}>
              <TextInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
                name="password"
                error={error.password}
                helperText={error.password}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextInput
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                error={error.confirmPassword}
                helperText={error.confirmPassword}
              />
            </Grid>
          </>
        )}

        {action === 1 && (
          <>
            <Grid item xs={4} md={4} lg={4}>
              <TextInput
                value={createdBy && createdBy.name}
                label="Created By"
                name="createdBy"
                disabled={true}
              />
            </Grid>
            <Grid item xs={8} md={8} lg={8}>
              <TextInput
                value={createdAt && createdAt.toDate()}
                label="Created At"
                name="createdAt"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <TextInput
                value={modifiedBy && modifiedBy.name}
                label="Modified By"
                name="modifiedBy"
                disabled={true}
              />
            </Grid>
            <Grid item xs={8} md={8} lg={8}>
              <TextInput
                value={modifiedAt && modifiedAt.toDate()}
                label="Modified At"
                name="modifiedAt"
                disabled={true}
              />
            </Grid>
          </>
        )}
      </Grid>
      <SubmitButton
        startIcon={(loading || authLoading) && <CircularProgress size={20} />}
        fullWidth
        variant="contained"
        color="primary"
        onClick={OnSubmit}
        disabled={loading || authLoading}
      >
        {action === 1 ? "Update Administrator" : "Add Administrator"}
      </SubmitButton>
    </>
  );
}
