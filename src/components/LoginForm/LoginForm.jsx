import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="m-l">
            <div className='logo'></div>
            <div className='m-l-f'>
                <h1>LOGIN FORM</h1>
                <div className='form-inputs'>
                    <h2><label for="userid">User ID:</label></h2>
                    <div><input id='userid' type="text" placeholder='UserId' /></div>
                </div>
                <div className='form-inputs'>
                    <h2><label for="password">Password:</label></h2>
                    <div><input id='password' type="text" placeholder='Password' /></div>
                </div>
                {/* <div className='radio-btn'>
                    <label for="employee">Employee</label><input type="radio" name="user_type" id="employee" />
                    <label for="admin">Admin</label><input type="radio" name="user_type" id="admin" />
                </div> */}
                <Link to={"/Admin"} className='m-l-b'>
                    LogIN
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
