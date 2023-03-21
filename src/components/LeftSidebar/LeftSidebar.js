import React, { useState } from 'react'
import "../LeftSidebar/LeftSidebar.css"
import { Avatar } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AddIcon from '@mui/icons-material/Add';

const LeftSidebar=()=>{
    const savedItem = localStorage.getItem("user");
    const parsedItem = JSON.parse(savedItem);
    const[name,setName]=useState(parsedItem.name)
    const[initial,setInitial]=useState(name.charAt(0))
    
    
    return(
        <div id='sidebar'>
            <div id='profile'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gOp_o0HxgwsnD2iyj3XXC2eFq5Q8KyYD6A&usqp=CAU' alt='bg-image' />
                <div id='profileDetails'>
                    <Avatar style={{height:"50px",width:"50px",margin:"0px auto",backgroundColor:"orange"}}>{initial}</Avatar>
                    <h5>{name}</h5>
                    <p>Add a photo</p>
                </div>
            </div>
            <div id='connections'>
                <span className='span1'>Connection<br/><span>Grow your network</span></span>
                <PersonAddAlt1Icon fontSize='20px'/>
            </div>
            <div id="myitems">
                <TurnedInIcon fontSize='20px'/>
                <span className='span1'>My items</span>
            </div>
            <div id='more'>
                <span className='span1'>Groups<br/>Events<br/>Follow Hashtags</span>
                <AddIcon fontSize='20px'/>
            </div>
            <div id='discover'>
                Discover More
            </div>
        </div>
    )
}

export default LeftSidebar