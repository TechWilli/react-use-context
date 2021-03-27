import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  // exemplo fictício simples de redirect de rotas usando o react-router-dom através de um state de autenticação
  const [auth, setAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}