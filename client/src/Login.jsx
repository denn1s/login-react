import { useContext, useState } from 'react'
import { md5 } from 'js-md5'
import LoginContext from './LoginContext'
import Button from './Button'
import Input from './Input'
import './Login.css'

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const { setLoggedIn } = useContext(LoginContext)

  const setValue = (name, value) => {
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    const body = { }
    body.username = formState.username
    body.password = md5(formState.password) 
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
      <Input label="Username" type="text" value={formState.username} onChange={(value) => setValue('username', value)} />
      <Input label="Password" type="password" value={formState.password} onChange={(value) => setValue('password', value)}/>
      <Button text="Login" onClick={handleSubmit} />
    </aside>
  )
}

export default Login
