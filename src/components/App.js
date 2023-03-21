import React, { useState } from 'react'
import '../styles/App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Post from './Post/Post';
import RightSidebar from './RightSidebar/RightSidebar';

const App = () => {
  const[isloggedin,setIsloggedIn]=useState(false)

  const loginfunction=(data)=>{
    setIsloggedIn(data)
  }

  return (
    <div id="main">
      {isloggedin ?(<div id='mainbody'>
        <Navbar/>
          <div id='body'>
          <LeftSidebar/>
          <Post/>
          <RightSidebar/>
          </div></div>)
          :(<Login loginfunction={loginfunction} />)}
    </div>
  )
}


export default App;


