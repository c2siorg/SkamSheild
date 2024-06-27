import React from "react";
import { TextField } from "@mui/material";

export default function TextInput(props) {
  const {
    multiline,
    label,
    type,
    error,
    disabled,
    helperText,
    name,
    rows,
    rowsMax,
    value,
    onChange,
    margin,
    autoFocus,
    size,
    InputProps,
    onInput,
    onBlur,
    onFocus,
    min,
    variant,
  } = props;

  return (
    <TextField
      style={{ marginBottom: 5 }}
      name={name}
      margin={margin}
      label={label}
      multiline={multiline}
      maxRows={rowsMax}
      minRows={rows}
      value={value}
      type={type}
      autoFocus={autoFocus}
      // placeholder={label}
      onChange={onChange}
      variant={variant ? variant : "outlined"}
      error={error}
      disabled={disabled}
      helperText={error ? helperText : null}
      size={size}
      onFocus={onFocus}
      fullWidth={true}
      InputProps={InputProps}
      onBlur={onBlur}
      onInput={onInput}
      min={min}
    />
  );
}