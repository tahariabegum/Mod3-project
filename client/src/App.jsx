import axios from 'axios'
import customAxiosAndBaseURL from './Api'

import { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from '../pages/Home'
import SearchBook from './SearchBook'

import ReviewDetail from '../pages/ReviewDetail'
import ReviewList from '../pages/ReviewList'
import CreateReview from '../pages/CreateReview'
import EditReview from '../pages/EditReview'

import Library from '../pages/Library'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'

import './App.css'
import FindBook from './FindBook'


let key = import.meta.env.VITE_KEY


function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState (true)

  async function getUser(token) {
    
    try {
      const response = await customAxiosAndBaseURL.get('/api/users', {
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

  const loggedIn = user.username; 

  return (
    <>
      <Nav username = {user.username} setUser = {setUser} />
      <Routes>
        <Route path = '/' element = { < Home />} />

          {loggedIn ? 
          <>
            <Route path = '/profile' element = {<Profile username = {user.username} email = {user.email} />} />
            {!isLoading && <Route path = '*' element = {<Navigate to = "/" />} /> }
            <Route path = '/search' element = { <SearchBook /> } />
            <Route path = '/reviews' element = { <ReviewList username = {user.username} />} />
            <Route path = '/reviews/new' element = { <CreateReview username = {user.username} />} />
            <Route path = '/reviews/:id' element = { <ReviewDetail username = {user.username} /> }/>
            <Route path = '/reviews/:id/edit' element = { <EditReview />} />
            <Route path = '/library' element = { <Library username = {user.username} /> } />
          </>
           : 
          <>
            <Route path = '/login' element = { <Login setUser = {setUser} /> } />
            <Route path = '/register' element = { <Register setUser = {setUser} /> } />
            {!isLoading && <Route path = "*" element = {<Navigate to = "/login" />} />}
          </>
          }   

      </Routes>
    </>
  )
}


export default App