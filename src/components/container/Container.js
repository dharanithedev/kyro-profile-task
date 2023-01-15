import React , { createContext, useState }from 'react'

// Custom CSS
import './container.css'

// Custom Commponents
import Sidenav from "../nav/Sidenav";
import Body  from "../body/Body";
import ProfileDetails from "../profile-details/ProfileDetails";

//User Info
export const userInfoContext = createContext(); 

function Container() {
  const [userInfo, setUserInfo] = useState({firstName : 'Dharanitharan', displayName : 'Dharanitharan Murugan', email: 'dharanithedev@outlook.com'});
  return (
    <div className='kyro-app-conatiner'>
        <userInfoContext.Provider value={[userInfo, setUserInfo]}>
          <Sidenav/>
          <Body/>
          <ProfileDetails/>
        </userInfoContext.Provider>
    </div>
  )
}

export default Container