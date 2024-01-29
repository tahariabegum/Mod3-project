import axios from 'axios'

import { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import SearchBook from './SearchBook'

import Login from '../pages/Login'
// import Register from '../pages/Register'

import './App.css'


let key = import.meta.env.VITE_KEY


function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState (false)

  return (
    <>
      <Nav />
      <Routes>
        <Route path = '/' element = { < Home />} />
        <Route path = '/search' element = { <SearchBook /> } />
        <Route path = '/login' element = { <Login /> } />
      </Routes>
    </>
  )
}


export default App