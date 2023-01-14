import React from 'react'

import ProfileForm from '../user-form/ProfileForm'

function Body() {
  const name = "Dharanitharan Murugan"
  return (
    <div className='child-components app-body'>
      <div className='body-header'>
        <p className='user-name bold'>Good Morning, {name}</p>
        <p className='current-date'>April 28, 2022</p>
      </div>
      <ProfileForm/>
    </div>
  )
}

export default Body