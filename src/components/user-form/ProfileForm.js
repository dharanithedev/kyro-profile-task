import React, { useState, useContext } from 'react'

import axios from 'axios';
import Input from './inputField/Input';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { FormGroup } from '@mui/material';
import { Button } from '@mui/material';
import { inputFields, initialState } from '../../data/inputFields';

import { userInfoContext } from '../container/Container';

import './profile-form.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProfileForm = () => {

  const [values, setValues] = useState(initialState);
  const [userInfo, setUserInfo, fetchUserDetails] = useContext(userInfoContext);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');

  const setChanges = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(values).includes("")) {
      axios.put(`https://kyro-backend.onrender.com/api/user/${userInfo['_id']}`, values)
        .then((res) => {
          setValues(initialState);
          openAlert('success');
        })
        .catch((err) => {
          console.log('Error in User creation!');
        });
    } else {
      openAlert('error');
    }

  }
  const openAlert = (severity) => {
    setSeverity(severity);
    setOpen(true);
  };
  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const resetForm = (e) => {
    e.preventDefault();
    setValues(initialState);
    fetchUserDetails();
  }

  return (
    <div className='profile-from-section'>
      <p className='form-header bold'>My Profile</p>
      <FormGroup>
        <div className='profile-form alignFormFields'>
          <div className='formInputs'>
            {inputFields.map((input) => {
              return (
                <Input
                  key={input.id}
                  name={input.name}
                  {...input}
                  onChange={setChanges}
                  value={values[input.name]}
                />
              )
            })}
          </div>
          <div className='formButtons'>
            <Button variant="contained" className='form-button-color' onClick={handleSubmit}>Save Changes</Button>
            <Button variant="contained" className='form-button-color' onClick={resetForm}>Reset</Button>
          </div>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            onClose={closeAlert}
          >
            <Alert onClose={closeAlert} severity={severity} sx={{ width: '100%' }}>
              {severity === 'error' ? 'Please check form fields, it cannot be empty!' : 'Records saved successfully!'}
            </Alert>
          </Snackbar>
        </Stack>
      </FormGroup>
    </div>
  )
}

export default ProfileForm