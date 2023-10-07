import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../components/styles/login.css'





const Login = () => {
    const navigate = useNavigate();
    const username = useRef()
    const password = useRef()
    const user = localStorage.getItem("username", username.value)
    const pass = localStorage.getItem("password", password.value)
    const [isLoggedin, setIsLoggedin] = useState(false);
    const handleSubmit = async e => {
        if (username.current.value === user && password.current.value === pass) {

            setIsLoggedin(true);
            navigate('/')
        }
        else {
            alert('invalid Login')
        };

    }


    const logout = () => {
        localStorage.removeItem(user);
        setIsLoggedin(false);
        alert('You have been logged out')
    };

    return (

        <div className='app'>
            <h1>Login</h1>
            <div className="userForm">
                <form>
                    <h3 className="mb-2">Login</h3>
                    <div className='mb-2'>
                        <label htmlFor='username'>Username:</label>
                        <input id='inputLogin' ref={username} type='username' placeholder='Username' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password:</label>
                        <input id='inputLogin' ref={password} type='password' placeholder='Password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' onClick={handleSubmit}>Login</button>
                    </div>

                </form>
            </div>
                    <>
                        <h1>User is logged in</h1>
                        <button onClickCapture={logout}>logout user</button>
                    </>

        </div>
    )
}

export default Login; 