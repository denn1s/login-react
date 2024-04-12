import { useState } from 'react'
import { md5 } from 'js-md5'
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import Button from '@components/Button'
import Input from '@components/Input'
import './Login.css'

const Login = () => {
  const { navigate } = useNavigate()
  const { setToken } = useToken() 
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const [errorMessage, setErrorMessage] = useState('')


  const setValue = (name, value) => {
    switch(name) {
      case 'username':
        setUsername(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  const handleSubmit = async () => {
    const body = { }
    body.username = username
    body.password = md5(password) 
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('http://127.0.0.1:5000/login/', fetchOptions)
    const { access_token } = await response.json()
    if (response.ok) {
      console.log('success! token is: ', access_token)
      setToken(access_token)
      navigate('/')
      return
    }
    setErrorMessage('Incorrect user or password')
  }

  return (
    <aside className="login">
      <h1 className="title">Welcome!</h1>
      {
        errorMessage !== '' ? (
          <div className='error-message' onClick={() => setErrorMessage('')}>
            {errorMessage}
          </div>
        ) : null
      }
      <Input placeholder="your username here" label="Username" type="text" value={username} onChange={(value) => setValue('username', value)} />
      <Input label="Password" type="password" value={password} onChange={(value) => setValue('password', value)}/>
      <Button text="Login" onClick={handleSubmit} />
    </aside>
  )
}

Login.propTypes = {
}

export default Login
