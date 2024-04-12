import { useEffect, useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import useToken from './useToken'
import useNavigate from './useNavigate'

import Home from './Pages/Home'
import Grades from './Pages/Grades'
import About from './Pages/About'
import Logout from './Pages/Logout'
import Login from './Login'
import Nav from './Nav'


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

const Pages = () => {
  const { token } = useToken() 
  const { page, navigate } = useNavigate()

  let CurrentPage = () => <h1>404</h1>

  if (routes[page] && routes[page].requiresAuth && !token) {
    return <div><h1>Unauthorized</h1><a href='/#/login' onClick={() => navigate('/login')}>Please login</a></div>
  }

  CurrentPage = routes[page].component

  return (
    <div>
      <Nav />
      <CurrentPage />
    </div>
  )
}


Pages.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func
}

export default Pages
