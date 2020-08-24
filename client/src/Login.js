import React, { useState, useContext } from 'react'
// import {UserContext} from './context/userProvider'
import Nav from './Nav'

const Login = () => {
    // const initAuth = {
    //     username: "",
    //     password: ""
    // }
    // const {login, authErrMsg} = useContext(UserContext)

    // const [auth, setAuth] = useState(initAuth)

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setAuth(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     login(auth)
        
    //     setAuth(initAuth)
    // }

    return (
        <div className="login">
            <h1>Admin Login</h1>
            <form className="login-form" /*onSubmit={handleSubmit}*/>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    // value={auth.username}
                    // onChange={handleChange}
                />
                <br/>
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password"
                    // value={auth.password}
                    // onChange={handleChange}
                />
                {/* <p>{authErrMsg}</p> */}
            </form>
            <br/>
            <button>Log In</button>
        </div>
    )
}

export default Login