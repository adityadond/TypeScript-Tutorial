import React from 'react'
import Login from "./Login"
import {ProfileProps} from "./Profile"
type PrivateProp={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}

export const Private=({ isLoggedIn,component:Component}:PrivateProp) =>{
    if(!isLoggedIn){
        return <Component name='aditya'/>
    }else {
    return <Login/>
}

}