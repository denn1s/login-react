import { useState, useEffect } from 'react'
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

const Home = () => {
  const { navigate } = useNavigate()
  const { token, getRawToken } = useToken()
  const decodedToken = getRawToken()

  if (decodedToken.actions.indexOf('view.home') === -1) {
    return <h1>Unauthorized</h1>
  }

  const [students, setStudents] = useState([])
  const [error, setError] = useState()

  const getStudents = async () => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/students/', fetchOptions)
      if (response.status === 403) {
        navigate('/logout')
      } 
      const json = await response.json()
      if (json) {
        setStudents(json)
      }
    } catch (e) {
      console.error('Error fetching', e)
      setError('Failed to fetch')
    }
   }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div>
      <h1>List of students: </h1>
      {
        error ? (
          <h2>{error}</h2>
        ) : null
      }
      <ul>
      {students && students.map((student) => <li key={student.id}>{student.name}</li>)}
      </ul>
    </div>
  )
}

export default Home
