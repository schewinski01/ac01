import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Sidebar } from '../../components/Sidebar'

import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export function CreateUser() {
  const router = useNavigate()
  const { handleCreateUser } = useUsers()

  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  })

  const { errors } = formState

  const handleCreate: SubmitHandler<CreateUserFormData> = async (values) => {
    handleCreateUser(values)
    router('/users')
  }

  return (
    <>
      <Header />
      <main className={style.container}>
        <Sidebar />

        <section className={style.user_list_container}>
          <div>
            <p>Criar usuário</p>
          </div>

          <form onSubmit={handleSubmit(handleCreate)}>
            <section>
              <Input
                {...register('name')}
                name="name"
                label="Nome Completo"
                error={errors.name}
              />
              <Input
                {...register('email')}
                name="email"
                label="E-mail"
                error={errors.email}
              />
              <Input
                {...register('password')}
                name="password"
                label="Senha"
                error={errors.password}
              />
              <Input
                {...register('password_confirmation')}
                name="password_confirmation"
                label="Confirme a senha"
                error={errors.password_confirmation}
              />
            </section>

            <div>
              <Button title="Cancelar" onClick={() => router('/users')} />
              <Button type="submit" title="Criar novo" />
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
