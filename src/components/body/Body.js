import React, {useContext} from 'react';
import './body.css'
import ProfileForm from '../user-form/ProfileForm';
import { userInfoContext } from '../container/Container';

function Body() {
  const userInfo = useContext(userInfoContext);
  return (
    <div className='child-components app-body'>
      <div className='body-header'>
        <p className='user-name bold'>Good Morning, {userInfo[0].firstName}</p>
        <p className='current-date'>April 28, 2022</p>
      </div>
      <ProfileForm/>
    </div>
  )
}

export default Body