import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from './contexts/Global'
import { AppRoutes } from './routes'
import './styles/global.scss'

function App() {

  return (
    <GlobalProvider>
      <ToastContainer />
      <AppRoutes />
    </GlobalProvider>
  )
}

export default App