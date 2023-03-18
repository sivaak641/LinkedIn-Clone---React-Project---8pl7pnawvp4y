
import React, { useState } from 'react'

function LocalLogin() {

    const [userReg, setUserregi] = useState(
        {
            name: "",
            photoURL: "",
            email: "",
            password: ""
        }
    );

    const [records, setRecords] = useState([]);

    const handlerInput = (e) => {
        const name = e.target.value;
        console.log(name);

        setUserregi({ ...userReg, [name]: "value" })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...userReg }
        setRecords([...records, newData])

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={userReg.name} placeholder="Full Name" onChange={handlerInput} />
                <input type="text" value={userReg.photoURL} placeholder="Profile picture URL" onChange={handlerInput} />
                <input type="text" value={userReg.email} placeholder="Email" onChange={handlerInput} />
                <input type="text" value={userReg.password} placeholder="password" onChange={handlerInput} />
                <button type="submit" value="sign Up" >Sign up</button>
                <h4>Already a member?  <span >Login Here</span></h4>
            </form>


        </div>
    )
}
