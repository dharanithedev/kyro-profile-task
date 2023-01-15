import React, {useState, useContext} from 'react'
import { FormGroup } from '@mui/material';
import { Button } from '@mui/material';
import Input from './inputField/Input';
import { inputFields, initialState } from '../../data/inputFields';

import { userInfoContext } from '../container/Container';


import './profile-form.css'

const ProfileForm = () => {

  // Initial State
  const [values, setValues] = useState(initialState);

  // User Context
  const [userInfo, setUserInfo] = useContext(userInfoContext);

  const setChanges = (event) => {
    const {name, value} = event.target;
    setValues({ ...values, [name]: value});
    setUserInfo({...userInfo, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Form', values)
  }

  const resetForm = (e) =>{
    e.preventDefault();
    console.log('Form', values)
  }

  return (
    <div className='profile-from-section'>
      <p className='form-header bold'>My Profile</p>
      <FormGroup>
      <div className='profile-form alignFormFields'>
        <div className='formInputs'>
          {inputFields.map((input)=>{
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