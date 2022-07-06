import React,{useState} from 'react'

function Loggedin() {
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const handleLogin=()=>{
setIsLoggedIn(true)

    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
    }
  return (
    <div> 
<button onClick={handleLogin}>Login</button>
<button onClick={handleLogout}>Logout</button>
<div>User is {isLoggedIn?"login":"logout"}</div>
    </div>
  )
}

export default Loggedin