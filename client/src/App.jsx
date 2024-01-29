import { useState, useEffect } from 'react'
import FindBook from './FindBook'
import Nav from './Nav'
import Home from './Home'
import SearchBook from './SearchBook'
import {Route, Routes} from 'react-router-dom'
import './App.css'


let key = import.meta.env.VITE_KEY


function App() {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path = '/' element = { < Home />} />
        <Route path = '/search' element = {<SearchBook />} />
      </Routes>
    </>
  )
}


export default App