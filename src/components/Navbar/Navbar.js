import React, { useState } from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

const Navbar=()=>{
    const savedItem = localStorage.getItem("user");
    const parsedItem = JSON.parse(savedItem);
    const[name,setName]=useState(parsedItem.name)
    const[initial,setInitial]=useState(name.charAt(0))
    return(
        <nav>
            <div id='left'>
                <div>
                    <img src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw' />
                </div>
                <div id='searchDiv'>
                    <SearchIcon />
                    <input type="text" placeholder='search'/>
                </div>
            </div>
            <div id='right'>
            <button className='iconBtn'><HomeIcon /><span>Home</span></button>
            <button className='iconBtn'><PeopleIcon/><span>My Network</span></button>
            <button className='iconBtn'><WorkIcon/><span>Jobs</span></button>
            <button className='iconBtn'><SmsIcon/><span>Messaging</span></button>
            <button className='iconBtn'><NotificationsIcon/><span>Notifications</span></button>
            <Avatar style={{backgroundColor:"orange"}}>{initial}</Avatar>
            </div>
        </nav>
    )
}

export default Navbar