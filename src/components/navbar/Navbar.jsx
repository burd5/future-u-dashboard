import React from 'react'
import './navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="topLeft">
                <span className="logo">Future U</span>
            </div>
            <div className="topRight">
                <div className="navbarIconContainer">
                    <NotificationsNoneIcon fontSize="large"/>
                    <span className="topIconBadge"></span>
                </div>
                <div className="navbarIconContainer">
                    <SettingsIcon fontSize="large"/>
                </div>
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" className="profAvatar" />
            </div>
        </div>
    </div>
  )
}


export default Navbar