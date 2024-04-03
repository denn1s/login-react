import { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import Pages from './Pages'

function App() {
  const [ loggedin, setLoggedIn ] = useState(
    localStorage.getItem('loggedin') === 'true'
  )

  useEffect(() => {
    localStorage.setItem('loggedin', loggedin)
  }, [loggedin])

  return (
    <div>
      {
        loggedin ? (
          <Pages />
        ) : <Login setLoggedIn={setLoggedIn} /> 
      }
    </div>
  )
}

export default App
