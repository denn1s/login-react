import express from 'express'
import cors from 'cors'

import { login, register, user_permissions } from './db.js'
import { generateToken, validateToken } from './jwt.js'

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
  
  const success = await login(username, password)
  if (success) {
    const actions = await user_permissions(success)
    const user = {
      username,
      email: 'dennis.aldana@gmail.com',
      actions
    }
    const token = generateToken(user)
    res.status(200)
    res.json({ "success": true, access_token: token })
    return
  }

  res.status(401)
  res.json({ "success": false })
})

app.get('/students', async (req, res) => {
  console.log('req.headers', req.headers)
  const { authorization } = req.headers
  const access_token = authorization.substring(7)
  
  if (validateToken(access_token)) {
    res.status(200)
    res.json([{ name: 'dennis', id: '0666'}, { name: 'other', id: '02361' }])
    return
  }

  res.status(403)
  res.json([])


})
const port = 5000

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})
