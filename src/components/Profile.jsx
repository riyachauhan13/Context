import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

 function Profile() {
  const{user, imgUrl}= useContext(UserContext)

  if(!user) return <div><h1>Please Login</h1></div>
  return (
    <div style={{height:"250px", width:"350px", backgroundColor:"#F5F5F5", color:"black", marginLeft:"170px"}}>
    <h2>Welcome</h2>
    <img style={{height:"200px",objectFit:"cover", borderRadius:"100px", position:"relative" }} src={imgUrl} alt=''/>
    <h1 style={{marginLeft:"30px"}}>{user.username.toUpperCase()}</h1>
    <h2 style={{marginLeft:"170px", fontSize:"45px"}}>{user.lastname}</h2>
    <h2 style={{marginLeft:"170px", fontSize:"45px"}}>{user.password}</h2>
  
    
    </div>
  )
}
export default Profile
