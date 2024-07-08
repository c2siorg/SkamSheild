import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckBox(props) {
  const { label, value, onChange, name } = props;

  return (
    <FormControlLabel

      control={
        <Checkbox
          checked={value}
          onChange={onChange}
          name={name}
          color="primary"
        />
      }
      label={label}
    />
  );
}
