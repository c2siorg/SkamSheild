import React from 'react';
import TextField from '@mui/material/TextField';


export default function CustomDateAndTimePicker(props) {

    const {
        label,
        disabled,
        defaultValue,
        name,
        value,
        onChange,
        size,
        onFocus,
        InputProps,
        variant,
        type
    } = props;

    return (
        <TextField
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            variant={variant ? variant : "outlined"}
            disabled={disabled}
            size={size}
            onFocus={onFocus}
            fullWidth={true}
            type={type}
            defaultValue={defaultValue}
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={InputProps}
        />
    );
}
