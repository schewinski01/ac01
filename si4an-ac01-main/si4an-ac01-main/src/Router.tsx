import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { CreateUser } from './pages/CreateUser'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/create" element={<CreateUser />} />
    </Routes>
  )
}
