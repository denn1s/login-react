import { useState } from 'react'
import { md5 } from 'js-md5'
import { PropTypes } from 'prop-types'
import Button from './Button'
import Input from './Input'
import './Login.css'

const Login = ({ setLoggedIn }) => {
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
    if (response.ok) {
      console.log('success!')
      setLoggedIn(true)
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
  setLoggedIn: PropTypes.func.isRequired,
}

export default Login
