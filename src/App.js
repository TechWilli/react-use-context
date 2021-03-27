import React from 'react'
import './App.css'
import Routes from './routes'
import GlobalContext from './contexts/GlobalContext'

const App = () => {

  return (
    <GlobalContext>
      <div className="App">
        <Routes />
      </div>
    </GlobalContext>
  )
}

export default App