import React, { useState } from 'react'
import axios from "axios"
import "../components/Login.css"

const Login = () => {
    const [data, setData ] = useState({
        userName : "",
        userLastName : "",
        userAge : "",
        userPassword : "",
    })
    const userNameHandler = (e) => {
        const val = e.target.value;
        setData({...data, userName : val})
    }
    const userLastNameHandler = (e) => {
        const val = e.target.value;
        setData({...data, userLastName : val})
    }
    const userAgeHandler = (e) => {
        const val = e.target.value;
        setData({...data, userAge : val})
    }
    const userPasswordHandler = (e) => {
        const val = e.target.value;
        setData({...data, userPassword : val})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:4100/userEnrollment", data )
    }
  return (
    <>
    <div className="conatiner">
        <div className="centerDiv">
            <form>
                <label >Fiest Name</label>
                <input type="text" name="name" id="name" onChange={userNameHandler}  /> <br />

                <label >Last Name </label>
                <input type="text" name="lastname" id="lastName" onChange={userLastNameHandler} /> <br />

                <label >Enter Age </label>
                <input type="number" name="lastname" id="lastName" onChange={userAgeHandler} /> <br />

                <label > PassWord </label>
                <input type="text" name="password" id="password" onChange={userPasswordHandler} /> <br />

                <input type="submit" value="Submit" id='submitButton' onClick={submitHandler} />
            </form>
        </div>
    </div>
    </>
  )
}

export default Login