import React, { useState } from 'react'
import "../Login/Login.css"

const Login=({loginfunction})=>{
    const[signup,setSignup]=useState(true)
    let [value, setValue] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    let [err, seterr] = useState(false)
    let [errtxt, seterrtxt] = useState('')

    let handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const signin=(e)=>{
        const savedItem = localStorage.getItem("user");
        const parsedItem = JSON.parse(savedItem);
        e.preventDefault();
        if (!value.email || !value.password ) {
            seterr(true)
            seterrtxt('Some fields are missing')
        } 
        else if(value.email!==parsedItem.email || value.password!=parsedItem.password){
            seterr(true)
            seterrtxt('Data does not match')
        }
         else {
            seterr(false)
            seterrtxt('')
            setValue({
                name: '',
                email: '',
                password: ''
            })
            loginfunction(true)
        }
    }
    
    const register=(e)=>{
        e.preventDefault();
        if (!value.name || !value.email || !value.password) {
            seterr(true)
            seterrtxt('Some fields are missing')
        } else if (value.name.length < 2) {
            seterr(true)
            seterrtxt('Name is too small')
        } 
        else if(!value.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            seterr(true)
            seterrtxt('email format is wrong')
        }
         else {
            seterr(false)
            seterrtxt('')
            localStorage.setItem('user', JSON.stringify(value))
            setSignup(false)
            setValue({
                name: '',
                email: '',
                password: ''
            })
        }
    }

    return(
        <div id='loginDiv'>
            <img src="https://grandnode.com/content/images/thumbs/5e4ba92f0857aa408cf9d866_login-with-linkedin_850.png" alt='logo'/>
            { signup===true ?(
                <form onSubmit={register}>
                    <input className='loginInput' placeholder='Full name' name='name' type="text" value={value.name} onChange={handleInputChange} required/> 
                    <input className='loginInput' placeholder='Email' name='email' type="email" value={value.email} onChange={handleInputChange} required/>
                    <input className='loginInput' placeholder='Password' name='password' type="password" value={value.password} onChange={handleInputChange} required/>
                    {err ? <div className="err">{errtxt}</div> : null}
                    <button className="signbtn" type='submit'>Sign Up</button>
                    <p>Already on LinkedIn? <button className='btn' onClick={()=>{setSignup(false)}}>Sign in</button></p>
                </form>

            ):
            (   
                <form onSubmit={signin}>
                    <input className='loginInput' name='email' placeholder='Email' type="email" value={value.email} onChange={handleInputChange} required/>
                    <input className='loginInput' name='password' placeholder='Password' type="password" value={value.password} onChange={handleInputChange} required/>
                    {err ? <div className="err">{errtxt}</div> : null}
                    <button className='signbtn' type='submit'>Sign In</button>
                    <p>New to LinkedIn? <button className='btn' onClick={()=>{setSignup(true)}} >Join now</button></p>
                </form>
            )
            }       
        </div>
    )
}

export default Login;