import { createContext, ReactNode, useState } from 'react'

type UserProps = {
  name: string
  email: string
}

type ContextProps = {
  users: UserProps[]
  handleCreateUser: (user: UserProps) => void
  isLoading: boolean
}

type Props = {
  children: ReactNode
}

export const UserContext = createContext({} as ContextProps)

export function UserProvider({ children }: Props) {
  const [users, setUsers] = useState<UserProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  function handleCreateUser(user: UserProps) {
    setIsLoading(true)

    setUsers((prev) => [...prev, user])
    setIsLoading(false)
  }

  return (
    <UserContext.Provider value={{ users, isLoading, handleCreateUser }}>
      {children}
    </UserContext.Provider>
  )
}
