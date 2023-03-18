
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/Post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, message, photoURl, vari }) {

    const [username, setUsername] = useState(localStorage.getItem("name"));
    const [like, setLike] = useState(false);





    return (
        <div className='posts'>
            <div className="post_header">
                <div className="post_headerleft">
                    <Avatar />
                    <div className="post_profile_details">
                        <h3>{username}</h3>
                        <p>{description}</p>
                    </div>

                </div>
                <MoreVertIcon />
            </div>


            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_footer">
                <div className="post_footer_option">
                    {
                        like ? <ThumbUpAltIcon style={{ color: 'blue' }} /> :
                            <ThumbDownAltIcon style={{ color: 'red' }} />
                    }
                    <span onClick={() => setLike(!like)}>{like ? <span>Like</span> : <span>Dislike</span>}</span>

                </div>
                <div className="post_footer_option">

                    <CommentIcon />
                    <span>Comment</span>

                </div>
                <div className="post_footer_option">

                    <ShareIcon />
                    <span>Share</span>

                </div>
                <div className="post_footer_option">

                    <SendIcon />
                    <span>Send</span>

                </div>




            </div>
        </div>
    )
}

export default Post 