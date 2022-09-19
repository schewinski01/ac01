import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { FormEvent } from 'react'

export function Login() {
  const router = useNavigate()

  function handleSimulateLogin(event: FormEvent) {
    event.preventDefault()
    router('/dashboard')
  }

  return (
    <main className={style.container}>
      <form className={style.login_box} onSubmit={handleSimulateLogin}>
        <Input name="email" label="E-mail" className={style.login_input} />
        <Input name="password" label="Senha" className={style.login_input} />

        <Button title="Entrar" className={style.login_button} />
      </form>
    </main>
  )
}
