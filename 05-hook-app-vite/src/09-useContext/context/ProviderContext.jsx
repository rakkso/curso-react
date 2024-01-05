import React, { useState } from 'react'
import { UserContext } from './UserContext'




export const ProviderContext = ({children}) => {

  const [user, setUser] = useState();

  return (

    <UserContext.Provider value={{ hola: 'Mundo',user:user,setUser:setUser }}>
    {children}
    </UserContext.Provider>
  )
}
