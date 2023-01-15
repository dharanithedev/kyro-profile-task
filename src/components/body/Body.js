import React from 'react'
import './body.css'
import ProfileForm from '../user-form/ProfileForm';

function Body() {
  return (
    <div className='child-components app-body'>
      <div className='body-header'>
        <p className='user-name bold'>Good Morning, Dharanitharan</p>
        <p className='current-date'>April 28, 2022</p>
      </div>
      <ProfileForm/>
    </div>
  )
}

export default Body