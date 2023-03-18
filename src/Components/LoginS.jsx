import React, { useState } from 'react'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom';


function LoginS() {


    const [email, setEmaill] = useState("")
    const [password, setPaasword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();

        let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/


        //login validation 
        if (!email) {
            return alert("email is required")
        } else {
            if (email.match(emailPattern)) {
                
            } else {
                localStorage.setItem("email", email)
            }


        }


        if (!password) {
            return alert("password is required")
        } else {
            if (password.match(passwordPatern)) {
                alert("Invalid password")
            } else {
                localStorage.setItem("password", password)

            }

        }



        alert("Login successfully")

        //finish validation code

        if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            alert("successfully login")
            navigate("/home")
        } else {

            alert("Invalid credentials")
        }

    }


    return (
        <div className='login'>

            <div className='loginScreen'>
                <img
                    src='https://www.freeiconspng.com/uploads/linkedin-9.png'
                    alt='linked in'
                />



                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="Email" value={email} onChange={e => setEmaill(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={e => setPaasword(e.target.value)} />
                    <input type="submit" value="Sign Up" />
                    <h4>Not a member?  <span > <Link to="/signup">Register  Here</Link></span></h4>
                </form>

            </div>
        </div>
    )
}

export default LoginS