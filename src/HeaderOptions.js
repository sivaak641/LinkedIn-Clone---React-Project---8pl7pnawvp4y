import React from 'react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import './css/Header.css'
function HeaderOptions({ Icon, title, avatar }) {
    return (
        <div className='header_options'>
            {
                Icon && <Icon></Icon>
            }
            {
                avatar && <Avatar name={avatar} />
            }
            <span>{title}</span>
        </div>
    )
}

export default HeaderOptions