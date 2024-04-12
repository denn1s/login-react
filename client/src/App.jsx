import './App.css'
import { TokenProvider } from '@hooks/useToken'
import { NavigationProvider } from '@hooks/useNavigate'
import Pages from './pages'


function App() {
  return (
    <TokenProvider>
      <NavigationProvider>
        <Pages />
      </NavigationProvider>
    </TokenProvider>
  )
}

export default App
