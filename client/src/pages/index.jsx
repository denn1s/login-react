import PropTypes from 'prop-types'

import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import Nav from '@components/Nav'

import Home from './Home'
import Grades from './Grades'
import About from './About'
import Logout from './Logout'
import Register from './Register'
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
  '/register': {
    component: Register,
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
