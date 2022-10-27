import './navbar.css'
import React from 'react';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="topLeft">
                <img className="logo" src="https://www.adworks.org/wp-content/uploads/FutureU_logo_Blue_wGrayOutlineBlueTagline_AJC.jpg" alt="future U logo"></img>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <span className="pageTitle">Future U Dashboard</span>
                </Link>
            </div>
            <div className="topRight">
                <div className="navbarIconContainer">
                    <NotificationsNoneIcon fontSize="large"/>
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