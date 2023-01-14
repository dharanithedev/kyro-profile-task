import React from 'react'

// Custom CSS
import './container.css'

// Custom Commponents
import Sidenav from "../nav/Sidenav";
import Body  from "../body/Body";
import ProfileDetails from "../profile-details/ProfileDetails";

function Container() {
  return (
    <div className='kyro-app-conatiner'>
        <Sidenav/>
        <Body/>
        <ProfileDetails/>
    </div>
  )
}

export default Container