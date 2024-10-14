import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componets/Home'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Course from './componets/Course'
import Login from './componets/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>

      <Routes>
      <Route path="/" element={<Login />} />
      
       <Route path='/home' element={<Home/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        

      </Routes>

    </>
  )
}

export default App
