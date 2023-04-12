import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import ErrorPage from './components/ErrorPage'



const App = () => {
  return (
   <>
   <Navbar/>
   {/* ----- Routes-------- */}
  
   <Routes>
    
   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/register' element={<Register/>} />
   <Route   element={<ErrorPage/>}/>

   </Routes>
   

 {/* ---------Compenents without ROutes---------- */}

   
   {/* <Home/> */}
   </>
  )
}

export default App
