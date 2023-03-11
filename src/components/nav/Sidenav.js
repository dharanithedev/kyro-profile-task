import React from 'react'

// Data-Source
import { navigationList } from '../../data/navList'

// MUI - Icon
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

// Custom CSS
import './sidenav.css'

function sidenav() {
  
  const listItems = navigationList.map((navItem) =>
    <div className='navigation-list' key={navItem.label}>
      {navItem.iconName}
      <span>{navItem.label}</span>
    </div>
  );

  return (
    <div className='child-components sidenav'>
      <div className='sideNavHeader'>
        <img src={`${process.env.PUBLIC_URL}/kyro.png`} alt='logo'  className='logo' />
        <MenuIcon/>
      </div>
      <div className='navigation-section'>
        {listItems}
      </div>
      <div className='navigation-section'>
        <div className='navigation-list'>
          <SettingsIcon/>
          <span>Logouttt</span>
        </div>
      </div>
    </div>
  )
}

export default sidenav