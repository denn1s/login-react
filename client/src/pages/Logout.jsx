import { useEffect } from 'react'
import useNavigate from '@hooks/useNavigate'

const Logout = () => {
  const { navigate } = useNavigate()
  useEffect(() => {
    localStorage.clear()
    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }, [])

  return <h1>Logging out...</h1>
}

export default Logout
