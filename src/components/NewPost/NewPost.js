import React, { useEffect, useState } from 'react'
import "../NewPost/NewPost.css"
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';

const NewPost=({name,items,like,comments,by,showDiv})=>{
    const [num,setNum]=useState(like)
    const[data,setData]=useState()
    const[newData,setNewData]=useState()
    const[comment,setComment]=useState([])
    const[showComment,setShowComment]=useState()
    const[col,setCol]=useState("grey")
    const[likeClick,setLikeClick]=useState(true)
    
    const handleClick2=()=>{
        setNewData(data)
        setData("")
    }
    const handleClick1=()=>{
        setShowComment(true)
    }
    useEffect(()=>{
        setComment([newData,...comment])
        setNewData("")
    },[newData])

    const handleClick=()=>{
        if(likeClick===true){
            setNum(num+1)
            setCol("blue")
            setLikeClick(false)
        }
    }

    return(
        <div id='newpost'>
                <div id='postHeader'>
                    <div id='leftheader'>
                        <Avatar style={{backgroundColor:"orange"}}>{name.charAt(0)}</Avatar>
                        <div id='details'>
                            <h3>{name}</h3>
                        </div>
                    </div>
                    <MoreVertIcon/>  
                </div>
                <div id='newpostBody'>
                    <p>{items}</p>
                    <div><ThumbUpIcon style={{color:'blue',fontSize:"8px"}}/>{num}</div>
                </div>
                <div id='footer'>
                    <div id='footerOption'>
                        <div id='footerOption1'>
                            <div className='options' onClick={handleClick}>
                                <ThumbUpIcon style={{color:col}}/>
                                <span>like</span>
                            </div>
                            <div className='options'>
                                <ShareIcon/>
                                <span>share</span>
                            </div>
                            <div className='options'>
                                <SendIcon/>
                                <span>send</span> 
                            </div>
                            <div className='options' onClick={handleClick1} >
                                <CommentIcon/>
                                <span>comment</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='comment'>
                {showComment?<div id='commentDiv1'>
                            <Avatar style={{backgroundColor:"orange"}}>{name.charAt(0)}</Avatar>
                            <input type="text" placeholder='Start comment' value={data} onChange={(e)=>{setData(e.target.value)}} />
                            <button id='sendbtn1' onClick={handleClick2}><SendIcon/></button>
                    </div>:null} 
                </div>
                <div id='commentSection'>{
                                
                                comment.map((items,index)=>{
                                    return(
                                        items?<><div id="avatarDiv"><Avatar style={{height:"30px",width:"30px",backgroundColor:"orange"}}>{name.charAt(0)}</Avatar><h4>{name}</h4></div><div className='commentDiv' key={index}>{items}</div></>  : null
                                    )
                                })
                            }
                            {showDiv &&<><div id="avatarDiv"><Avatar style={{height:"30px",width:"30px",backgroundColor:"lightsteelblue"}}>R</Avatar><h4>{by}</h4></div><div className='commentDiv' key={-1}>{comments}</div></>}
                </div>
            </div>
    )
}

export default NewPost