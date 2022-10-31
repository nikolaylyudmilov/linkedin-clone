import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from "./userSlice"

function Header() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>

      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt="" />

        <div className="header__search">
          <SearchIcon/>
          <input placeholder='Search' type="text" name="" id="" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='My Network'/>
        <HeaderOption Icon={ChatIcon} title='My Network'/>
        <HeaderOption Icon={NotificationsIcon} title='My Network'/>
        <HeaderOption avatar={true} title="me"
          onClick={logoutOfApp}
        />

      </div>

    </div>
  )
}

export default Header