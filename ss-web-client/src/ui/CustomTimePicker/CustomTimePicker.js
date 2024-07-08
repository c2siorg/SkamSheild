import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

export default function CustomTimePicker(props) {
  const { onChange, value, label, id, size } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        label={label}
        placeholder="08:00 AM"
        mask="__:__ _M"
        value={value}
        onChange={onChange}
        fullWidth
        size={size}
        variant="inline"
        id={id}
        inputVariant="outlined"
        margin="none"
      />
    </MuiPickersUtilsProvider>
  );
}
