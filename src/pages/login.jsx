import React, { useRef} from 'react'
import { useNavigate } from "react-router-dom";
import '../components/styles/login.css'





const Login = () => {
    const navigate = useNavigate();
    const username = useRef()
    const password = useRef()
    const user = localStorage.getItem("username", username.value)
    const pass = localStorage.getItem("password", password.value)
    const handleSubmit = async e => {
        if(username.current.value === user &&password.current.value === pass) {
            
            
            navigate('/')
        }
        else {
            alert('invalid Login')
          };
        
      }




    return (
        
        <div className='app'>
            <h1>Login</h1>
            <div className="userForm">
                <form>
                    <h3 className="mb-2">Login</h3>
                    <div className='mb-2'>
                        <label htmlFor='username'>Username:</label>
                        <input id='input' ref={username} type='username' placeholder='Username' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password:</label>
                        <input id='input' ref={password} type='password' placeholder='Password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' onClick={handleSubmit}>Login</button>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default Login; 