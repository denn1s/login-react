import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Home from './Pages/Home'
import Grades from './Pages/Grades'
import About from './Pages/About'
import Logout from './Pages/Logout'
import Login from './Login'

const routes = {
  '/': {
    component: Home,
    requiresAuth: true
  }, 
  '/grades': {
    component: Grades,
    requiresAuth: true
  },   
  '/about': {
    component: About,
    requiresAuth: false
  },
  '/login': {
    component: Login,
    requiresAuth: false
  },
  '/logout': {
    component: Logout,
    requiresAuth: false
  }
}

const Pages = ({ token, setToken }) => {
  const isLoggedIn = !!localStorage.getItem('access_token')
  const path = window.location.hash.substring(1)

  const [page, setPage] = useState(path || '/')

  useEffect(() => {
    if (path) {
      setPage(path)
    }
  }, [path])

  console.log('path', path)
  console.log('page', page)
  console.log('token', token)

  let CurrentPage = () => <h1>404</h1>

  if (routes[page] && routes[page].requiresAuth && !token) {
    return <div><h1>Unauthorized</h1><a href='/#/login' onClick={() => setPage('/login')}>Please login</a></div>
  }

  CurrentPage = routes[page].component

  return (
    <div>
      <ul style={{ position: 'fixed', top: 0, left: 0, width: '100%', listStyle: 'none', display: 'flex', gap: '5px' }}>
        <li className={page === '/' ? 'active' : ''}> 
          <a href="/" onClick={() => setPage('/home')}>Home</a>
        </li>
        <li className={page === '/grades' ? 'active' : ''}> 
          <a href="#/grades" onClick={() => setPage('/grades')}>Grades</a>
        </li>
         <li className={page === '/about' ? 'active' : ''}> 
          <a href="#/about" onClick={() => setPage('/about')}>About</a>
        </li>
        {
          isLoggedIn ? (
            <li className={page === '/logout' ? 'active' : ''}> 
              <a href="#/logout" onClick={() => setPage('/logout')}>Logout</a>
            </li>
          ) : (
            <li className={page === '/login' ? 'active' : ''}> 
              <a href="#/login" onClick={() => setPage('/login')}>Login</a>
            </li>
          )
        }
      </ul>
      <CurrentPage token={token} setToken={setToken} navigate={setPage} />
    </div>
  )
}


Pages.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func
}

export default Pages
