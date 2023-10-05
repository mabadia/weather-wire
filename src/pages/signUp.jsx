import React, { useRef} from 'react'
import { useNavigate } from "react-router-dom";
import '../components/styles/signUp.css'





const SignUp = () => {
    const navigate = useNavigate();
    const username = useRef()
    const password = useRef()
    const handleSubmit = async e => {
        if(username.current.value&&password.current.value) {
            localStorage.setItem("username", username.current.value)
            localStorage.setItem("password", password.current.value)
            
        }
        navigate('/')
      };



    return (
        
        <div className='app'>
            <h1>Sign Up</h1>
            <div className="userForm">
                <form>
                    <h3 className="mb-2">Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor='username'>Username:</label>
                        <input id='input' ref={username} type='username' placeholder='Username' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password:</label>
                        <input id='input' ref={password} type='password' placeholder='Password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' onClick={handleSubmit}>Sign Up</button>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default SignUp; 