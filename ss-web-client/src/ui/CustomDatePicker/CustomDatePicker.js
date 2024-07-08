import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function CustomDatePicker(props) {
  const { onChange, value, label, id, size, maxDate } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="none"
        inputVariant="outlined"
        id={id}
        format="MM/dd/yyyy"
        maxDate={maxDate}
        fullWidth
        size={size}
        label={label}
        value={value}
        variant="inline"
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
      {/* <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={label}
        style={{ margin: 5 }}
        value={value}
        onChange={handleChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      /> */}
    </MuiPickersUtilsProvider>
  );
}
