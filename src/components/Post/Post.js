import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../Post/Post.css"
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import NewPost from '../NewPost/NewPost';
import SendIcon from '@mui/icons-material/Send';
import post from "../posts.json"

const Post=()=>{
    const[data,setData]=useState("")
    const[newData,setNewData]=useState("")
    const[posts,setPosts]=useState([])
    const savedItem = localStorage.getItem("user");
    const parsedItem = JSON.parse(savedItem);
    const[name,setName]=useState(parsedItem.name)
    const[like,setLike]=useState(0)
    const[comments,setComments]=useState("")
    const[by,setBy]=useState("")
    const[showDiv,setShowDiv]=useState()

    const handleClick=()=>{
        setNewData(data)
        setData("")
    }

    useEffect(()=>{
        setPosts([newData,...posts])
        setNewData("")
    },[newData])

    return(
        <div id='post'>
            <div id='post1'>
                <Avatar style={{backgroundColor:"orange"}}>{name.charAt(0)}</Avatar>
                <input type="text" placeholder='Start a post'value={data} onChange={(e)=>{setData(e.target.value)}} />
                <button id='sendbtn' onClick={handleClick}><SendIcon/></button>
            </div>
            <div id='postOptions'>
                <div className='option'>
                    <PhotoIcon style={{color:'blue'}}/>
                    <span>Photo</span>
                </div>
                <div className='option'>
                    <YouTubeIcon style={{color:'green'}}/>
                    <span>Video</span>
                </div>
                <div className='option'>
                    <EventIcon style={{color:'darkgoldenrod'}}/>
                    <span>Event</span>
                </div>
                <div className='option'>
                    <ArticleIcon style={{color:'brown'}}/>
                    <span>Write Article</span>
                </div>
            </div>
                   
            {
                posts.map((items,index)=>{
                    return items?<NewPost key={index} name={name} items={items} like={like} comments={comments} by={name} showDiv={false}/>:null
                })
            }
            <NewPost key={-1} name={post[0].postedBy} items={post[0].postText} like={post[0].likes} comments={post[0].comments[0].comment} by={post[0].comments[0].by} showDiv={true}/>
            
        </div>
    )
}

export default Post