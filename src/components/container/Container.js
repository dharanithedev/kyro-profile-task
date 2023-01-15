import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

import './container.css'

import Sidenav from "../nav/Sidenav";
import Body from "../body/Body";
import ProfileDetails from "../profile-details/ProfileDetails";

export const userInfoContext = createContext();

function Container() {

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    axios
      .get(`http://localhost:8082/api/user`)
      .then((res) => {
        setUserInfo(res.data[0]);
      })
      .catch((err) => {
        console.log('Error from container.js - Fetch user details failed!');
      });
  }

  return (
    <div className='kyro-app-conatiner'>
      <userInfoContext.Provider value={[userInfo, setUserInfo, fetchUserDetails]}>
        <Sidenav />
        <Body />
        <ProfileDetails/>
      </userInfoContext.Provider>
    </div>
  )
}

export default Container