import React, { useState, useContext } from 'react'

import axios from 'axios';
import Input from './inputField/Input';

import { FormGroup } from '@mui/material';
import { Button } from '@mui/material';
import { inputFields, initialState } from '../../data/inputFields';

import { userInfoContext } from '../container/Container';

import './profile-form.css'

const ProfileForm = () => {

  const [values, setValues] = useState(initialState);
  const [userInfo, setUserInfo, fetchUserDetails] = useContext(userInfoContext);

  const setChanges = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form', userInfo)
    axios.put(`https://kyro-backend.onrender.com/api/user/${userInfo['_id']}`, values)
      .then((res) => {
        setValues(initialState);
      })
      .catch((err) => {
        console.log('Error in User creation!');
      });
  }

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
      </FormGroup>
    </div>
  )
}

export default ProfileForm