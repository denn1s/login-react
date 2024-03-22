import express from 'express'
import cors from 'cors'

import { login, register } from './db.js'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
  console.log("body", req.body)
  const { username, password } = req.body

  await register(username, password)
  res.send('{ "message": "user created" }')
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  console.log('username', username)
  console.log('password', password)
  
  const success = await login(username, password)
  console.log('success', success)
  if (success) {
    res.status(200)
    res.send('{ "message": "user logged in" }')
    return
  }

  res.status(401)
  res.send('{ "message": "not logged in" }')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
