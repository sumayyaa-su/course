import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState({
      Username:'',
      Password:''
 
    })
    const navigate=useNavigate()
let updateUser=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
let sendData=()=>{
  if ((user.Username=='course')&& (user.Password=='112233')) {
    localStorage.setItem("Username","admin")
    navigate('./home')
    
  } else {
    (alert('invalid credentials'))
  }
}
   return (
    <div >
     <>
     <h1>LOGIN</h1> <br />
     <TextField required id="standard-basic" label="Username"  type="Username" name="Username" value={user.Username} onChange={updateUser}variant="outlined" /><br /><br />
     <TextField required id="standard-basic" label="Password" type="Password" name="Password" value={user.Password} onChange={updateUser} variant="outlined" /><br /><br />
     <Button variant="contained" onClick={sendData}>submit</Button><br />
 </>
 
 </div>
  )
}

export default Login