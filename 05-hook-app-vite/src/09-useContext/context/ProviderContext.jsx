import React from 'react'
import { UserContext } from './UserContext'


const user = {
    id: 123,
    name: 'Óscar',
}

export const ProviderContext = ({children}) => {
  return (

    <UserContext.Provider value={{ hola: 'Mundo' }}>
    {children}
    </UserContext.Provider>
  )
}
