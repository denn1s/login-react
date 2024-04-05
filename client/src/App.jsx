import { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import Pages from './Pages'

function App() {
  const [ token, setToken ] = useState(
    localStorage.getItem('access_token') || null
  )

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token)
    }
  }, [token])

  return (
    <div>
      <Pages token={token} setToken={setToken} />
    </div>
  )
}

export default App
