import { useEffect } from 'react'

const Logout = ({ navigate }) => {
  useEffect(() => {
    localStorage.clear()
    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }, [])

  return <h1>Logging out...</h1>
}

export default Logout
