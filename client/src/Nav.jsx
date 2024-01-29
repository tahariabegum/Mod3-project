import { Link, useNavigate } from "react-router-dom"; 
import { useState } from 'react'
import './App.css'

export default function Nav( { username, setUser} ) {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        setUser({})
        navigate('/')
    };


    return (

        <div className = 'navbar'>
            <Link to = '/' >
               <div className = 'home'> 
                <img src = 'https://cdn-icons-png.flaticon.com/512/29/29302.png' />
               </div>
            </Link>
            <Link to = '/search'> 
                <div className  = 'search'> Search </div>
            </Link>

            <div className = 'login'>
            {username ? (
                <li onClick = {logout} >
                    <Link to = "/login"> Logout </Link>
                </li>
            ) : (
                <Link to='/login'> Login</Link>
            )}
            </div>
        </div>

    )
}