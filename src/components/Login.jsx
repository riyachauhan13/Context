import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

 function Login() {
    const[username, setUsername] = useState('')
    const[lastname, setPassword] = useState('')
    const[password, setlastname] = useState('')


    let imageURL ="https://rukminim2.flixcart.com/image/850/1000/l2tcfbk0/poster/c/t/i/large-shinchan-flex-poster-for-room-mo-2485-24x36-flex-bd-original-image2t9wt62reyg.jpeg?q=90&crop=false"

    const {setUser, setImgUrl}= useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, lastname, password})
        setImgUrl(imageURL)

    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
      <input type='text' value={lastname} onChange={(e)=> setPassword(e.target.value)} placeholder='lastname'/>
      <input type='password' value={password} onChange={(e)=> setlastname(e.target.value)} placeholder='password'/>
      <button onClick={handleSubmit} >Submit</button>

    </div>
  )
}
export default Login
