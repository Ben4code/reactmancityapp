import React from 'react'
 import {Route, Redirect} from 'react-router-dom'


export default function PublicRoutes({
    user,
    component: Comp,
    ...rest

}) {
  return (
      //We pass the props from react-router-dom (history etc)
     <Route {...rest} component={(props)=>(
        rest.restricted ?
            (   
                user ?
                <Redirect to="/dashboard"/>
                :
                <Comp {...props} user={user}/>    
            )
            :
            <Comp {...props} user={user}/>
     )}/>
  )
}
