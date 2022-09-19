import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { UserCard } from '../../components/UserCard'
import { useUsers } from '../../hooks/useUsers'

import style from './style.module.css'

export function Users() {
  const { users, isLoading } = useUsers()

  return (
    <>
      <Header />
      <main className={style.container}>
        <Sidebar />

        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <table className={style.user_list_container}>
            <thead>
              <p>Usuários</p>

              <Link to="/users/create">Criar novo</Link>
            </thead>

            <tbody>
              <tr className={style.table_title_row}>
                <td>USUÁRIOS</td>
              </tr>

              {users.map((user) => (
                <UserCard user={user} />
              ))}
            </tbody>
            <tfoot>
              <p>
                Total <span>de</span> {users.length}
              </p>
            </tfoot>
          </table>
        )}
      </main>
    </>
  )
}
