import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CustomRadioGroup(props) {
    const { label, items, value, onChange, row } = props;

    return (
        <FormControl variant='outlined' component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup row={row} aria-label={label} name={`${label}_1`} value={value} onChange={onChange}>
                {items.map((item, index) => <FormControlLabel value={item.value} control={<Radio />} label={item.label} />)}
            </RadioGroup>
        </FormControl>
    );
}
