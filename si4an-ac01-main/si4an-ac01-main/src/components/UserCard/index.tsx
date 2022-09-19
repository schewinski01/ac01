import { ReactNode } from 'react'
import style from './style.module.css'

type UserProps = {
  name: string
  email: string
}

type Props = {
  user: UserProps
}

export function UserCard({ user }: Props) {
  return (
    <tr className={style.user_card}>
      <td>
        <p>{user.name}</p>
        <span>{user.email}</span>
      </td>
    </tr>
  )
}
