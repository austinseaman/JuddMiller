import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserProvider = (props) => {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        authErrMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    const [dataState, setDataState] = useState({
        bioData: []
    })

    const login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(res.data)
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: errMsg
        }))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            authErrMsg: ""
        })
    }

    const getData = () => {
        axios.get('/info/bio')
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    bioData: res.data
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    

    const deleteBio = (id) => {
        userAxios.delete(`/api/bio/${id}`)
            .then(res => {
                setDataState(prevData => ({
                    ...prevData,
                    bioData: dataState.bioData.filter(bio => bio._id !== id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    
    const addBio = (newText) => {
        const newBio = {
            bioText: newText
        }
        userAxios.post('/api/bio', newBio)
            .then(res => {
                getData()
            })
            .catch(err => console.log(err))
    }

    const editBio = (update, id) => {
        const updatedBio = {
            bioText: update
        }
        userAxios.put(`/api/bio/${id}`, updatedBio)
        .then(res => {
            console.log(res.data, 'edited')
            getData()
        })
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                authErrMsg: userState.authErrMsg,
                login: login,
                logout: logout,
                getData: getData,
                dataState: dataState,
                editBio: editBio,
                deleteBio: deleteBio,
                addBio: addBio
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider