import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import style from './style.module.css'

export function Dashboard() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <Sidebar />

        <section className={style.user_list_container}>
          <h1>
            Aplicação de exemplo da ac01, clique em usuários para acessar a
            listagem e o formulário
          </h1>
          <br />
          <br />
          <p>Alguns dos elementos são ficticios e servem apenas para exemplo</p>
        </section>
      </main>
    </>
  )
}
