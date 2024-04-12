import './App.css'
import { TokenProvider } from './useToken'
import { NavigationProvider } from './useNavigate'
import Pages from './Pages'


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
