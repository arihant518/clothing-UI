import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../Login/SignUp'
import About from '../About'
import Blog from '../Blog'
import Filter from '../Filter'
import Contact from '../Contact'
import History from '../History'
import Home from '../Home'
import Table from '../Table'

const Routing = () => {
  return (
    <div>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/table" element={<Table />} />
        </Routes>
    </div>
  )
}

export default Routing
