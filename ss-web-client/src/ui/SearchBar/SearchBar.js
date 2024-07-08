/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/lab/Autocomplete";

export default function SearchBar(props) {
  const { onChange, label, data, getOptionLabel, variant } = props;
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={getOptionLabel}
      fullWidth={true}
      //   value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField label={label} {...params} variant={variant} />
      )}
    />
  );
}
