import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './css/Header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Avatar } from '@material-ui/core'
import { Avatar } from '@mui/material';

function Header() {

    const [username, setUsername] = useState(localStorage.getItem("name"));


    return (
        <div className='header'>
            <div className="header_left">
                <div className="header_logo">
                    <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' />
                    
                </div>
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder='Search' />
                </div>
            </div>

            <div className="header_right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={PeopleIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Job" />
                <HeaderOptions Icon={MessageIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar={Avatar} title={username} />
            </div>
        </div>
    )
}

export default Header