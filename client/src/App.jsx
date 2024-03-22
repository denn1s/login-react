import { useEffect, useState } from 'react'
import './App.css'
import LoginContext from './LoginContext'
import Login from './Login'

function App() {
  const [ loggedin, setLoggedIn ] = useState(
    localStorage.getItem('loggedin') === 'true'
  )

  useEffect(() => {
    localStorage.setItem('loggedin', loggedin)
  }, [loggedin])

  return (
    <LoginContext.Provider value={{ loggedin, setLoggedIn }}>
      {
        loggedin ? (
          <h1>HOME</h1>
        ) : <Login /> 
      }
    </LoginContext.Provider>
  )
}

export default App
