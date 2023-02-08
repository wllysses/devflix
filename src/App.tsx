import { GlobalProvider } from './contexts/Global'
import { AppRoutes } from './routes'
import './styles/global.scss'

function App() {

  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  )
}

export default App