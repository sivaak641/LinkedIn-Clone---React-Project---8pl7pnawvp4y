import React, { useState } from 'react'
import "../RightSidebar/RightSidebar.css"

const RightSidebar=()=>{
    const [value,setValue]=useState({
        name1 : "Manoj",
        name2 : "Nithin"
    })
    

    return(
        <div id='rightsidebar'>
            <div id='followDiv'>
                <h3 id="followheader">Add to your feed</h3>
                <div className='followDiv1'><span>{value.name1}</span><button className='followbtn'>Follow</button></div>
                <div className='followDiv1'><span>{value.name2}</span><button className='followbtn'>Follow</button></div>
            </div>
            <div id='AdDiv'>
                <img src="https://neilpatel.com/wp-content/uploads/2021/02/linkedin-advertising-10.jpg" alt='ad'/>
            </div>
        </div>
    )
}

export default RightSidebar