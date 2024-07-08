import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export default function SelectMenu(props) {
  const {
    onChange,
    value,
    label,
    data,
    error,
    helperText,
    fullWidth,
    name,
    size,
    variant,
    disabled,
    SelectProps,
  } = props;
  return (
    <TextField
      size={size}
      margin="none"
      name={name}
      select
      disabled={disabled}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      helperText={error ? helperText : null}
      SelectProps={SelectProps}
    >
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
