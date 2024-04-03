import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'

const Pages = () => {
  const [page, setPage] = useState('about')

  let CurrentPage = () => <h1>404</h1>

  switch(page) {
    case 'home':
      CurrentPage = Home
      break
    case 'about':
      CurrentPage = About
      break
  }

  return (
    <div>
      <ul style={{ position: 'fixed', top: 0, left: 0, width: '100%', listStyle: 'none', display: 'flex', gap: '5px' }}>
        <li>
          <a href="#home" onClick={() => setPage('home')}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setPage('about')}>About</a>
        </li>
      </ul>
      <CurrentPage />
    </div>
  )
}

export default Pages
