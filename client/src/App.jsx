import axios from 'axios'

import { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import SearchBook from './SearchBook'

import Login from '../pages/Login'
import Register from '../pages/Register'

import './App.css'


let key = import.meta.env.VITE_KEY


function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState (true)

  async function getUser(token) {
    
    try {
      const response = await axios.get('/api/users', {
        headers: {
          Authorization: token
        }
      })
      setUser(response.data)
    } catch (err) {
      console.log(err.message)
      localStorage.removeItem('token')
    }
    setIsLoading(false)
  }

  useEffect(() => {

    const token = localStorage.getItem("token") 


    if(token) {
        getUser(token)
      } else {
        setIsLoading(false)
      }

    } , [])

  let loggedIn = user.username

  return (
    <>
      <Nav />
      <Routes>
        <Route path = '/' element = { < Home />} />
        {loggedIn ?
        <>
          <Route path = '/search' element = { <SearchBook /> } />
        </>
        :
        <>
          <Route path = '/login' element = { <Login /> } />
          <Route path = '/register' element = { <Register /> } />
        </>
        }
      </Routes>
    </>
  )
}


export default App