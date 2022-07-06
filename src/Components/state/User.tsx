import React,{useState} from 'react'
type AuthUser={
    name:string
    email:string
}

function User() {
    const[user,setUser]=useState<AuthUser|null>(null)
    const handleLogin=()=>{
setUser({
    name:"aditya",
    email:"adityadond"
})

    }
    const handleLogout=()=>{
        setUser(null)
    }
  return (
    <div>  
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User name is{user?.name}</div>
    <div>User emailname is{user?.email}</div>
        </div>
  )
}

export default User