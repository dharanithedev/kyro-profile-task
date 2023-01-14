import React from 'react'
import './input.css'

import TextField  from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Input = ({ label, placeholderIcon, onChange, ...inputFields }) => {    
  return (
    <div>
        <TextField 
            label={label}
            onChange={onChange}
            {...inputFields}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {placeholderIcon}
                    </InputAdornment>
                ),
            }}
        />
    </div>
  )
}

export default Input;