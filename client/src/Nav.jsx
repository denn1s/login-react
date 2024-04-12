import useNavigate from "./useNavigate"

const Nav = () => {
  const { page, navigate, isLoggedIn } = useNavigate()

  return (
        <ul style={{ position: 'fixed', top: 0, left: 0, width: '100%', listStyle: 'none', display: 'flex', gap: '5px' }}>
        <li className={page === '/' ? 'active' : ''}> 
          <a href="/" onClick={() => navigate('/home')}>Home</a>
        </li>
        <li className={page === '/grades' ? 'active' : ''}> 
          <a href="#/grades" onClick={() => navigate('/grades')}>Grades</a>
        </li>
         <li className={page === '/about' ? 'active' : ''}> 
          <a href="#/about" onClick={() => navigate('/about')}>About</a>
        </li>
        {
          isLoggedIn ? (
            <li className={page === '/logout' ? 'active' : ''}> 
              <a href="#/logout" onClick={() => navigate('/logout')}>Logout</a>
            </li>
          ) : (
            <li className={page === '/login' ? 'active' : ''}> 
              <a href="#/login" onClick={() => navigate('/login')}>Login</a>
            </li>
          )
        }
      </ul>
  )
}

export default Nav
