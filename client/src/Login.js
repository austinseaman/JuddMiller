import React, { useState, useContext } from 'react'
import {UserContext} from './context/userProvider'

const Login = () => {
    const initAuth = {
        username: "",
        password: ""
    }
    
    const {login, authErrMsg, token} = useContext(UserContext)

    const [auth, setAuth] = useState(initAuth)

    const handleChange = (e) => {
        const { name, value } = e.target
        setAuth(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(auth)
        
        setAuth(initAuth)
    }

    return (
        <div className="login">
            <h1>Admin Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    value={auth.username}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password"
                    value={auth.password}
                    onChange={handleChange}
                />
                <p>{authErrMsg}</p>

                { token ? <p>nice.</p> : <button onClick={handleSubmit} className="btn">Log In</button> }
            </form>
            
        </div>
    )
}

export default Login