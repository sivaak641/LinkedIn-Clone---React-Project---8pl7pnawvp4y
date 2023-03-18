import React, { useState } from 'react'
import "./css/Sidebar.css"
import { Avatar } from '@mui/material';

function Sidebar() {

    const [username, setUsername] = useState(localStorage.getItem("name"));
    return (
        <div className='sidebar'>
            <div className="sidebar_profile">
                <img src='https://wallpapercave.com/wp/NgP9bZP.jpg' />

                <div className="profile_details">

                    <Avatar />
                    <h4> {username}</h4>
                    <p>Front-end Web Developer</p>
                </div>

                <div className="profile_stats">
                    <span>Who Viewed  your profile</span>
                    <span className="stat_number">20</span>
                </div>

                <div className="profile_stats">
                    <span>Connection<br /><b>Grow Your Network</b></span>
                    <span className="stat_number">45 0</span>
                </div>
            </div>

            <div className="sidebar_recent">
                <p>Recent</p>
                <p className='hash'><span>#</span>marketing </p>
                <p className='hash'><span>#</span>react native </p>
                <p className='hash'><span>#</span>webdevelopment </p>
                <p className='hash'><span>#</span>nextjs </p>
                <p className='hash'><span>#</span>reactjs </p>
                <p className='hash'><span>#</span>reduxtoolkit </p>

            </div>
        </div>
    )
}

export default Sidebar
