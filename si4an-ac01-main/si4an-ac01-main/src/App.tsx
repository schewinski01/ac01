import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

import { Router } from './Router'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
