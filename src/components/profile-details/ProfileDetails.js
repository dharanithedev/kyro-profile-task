import React, {useContext, useEffect} from 'react';

import { Button, Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import './profile-details.css'
import { userInfoContext } from '../container/Container';

function ProfileDetails() {

  const userInfo = useContext(userInfoContext);

  useEffect(()=>{
    console.log(userInfo);
  },[]);

  return (
    <div className='child-components profile-details'>
      <div className='profile-details-header'>
        <Button variant="contained" className='form-button-color'>+ Add Project</Button>
        <Avatar alt="Dharanitharan" src={`${process.env.PUBLIC_URL}/profile.jpg`} className='profile-icon'/>
        <div className='profile-settings'>
          <span className='bold'>{userInfo[0].firstName}</span>
          <span className='role'>Project Manager</span>
        </div>
      </div>
      <div className='about-section'>
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt='about-image' className='about-img' />
        <span className='change-profile-image'><CameraAltIcon/></span>
        <p className='bold display-name'>{userInfo[0].displayName}</p>
        <p className='display-email'>{userInfo[0].email}</p>
        <p className='display-email'>{userInfo[0].phoneNumberPersonal}</p>
      </div>
    </div>
  )
}

export default ProfileDetails