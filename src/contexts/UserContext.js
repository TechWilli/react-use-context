import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

  const [username, setUsername] = useState('')

  const clearUsername = () => setUsername('')

  return (
    <UserContext.Provider value={{ username, setUsername, clearUsername }}>
      {children}
    </UserContext.Provider>
  )
}


