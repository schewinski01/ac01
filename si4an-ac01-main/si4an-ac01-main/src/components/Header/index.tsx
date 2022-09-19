import { Bell, UserPlus } from 'phosphor-react'

import { Input } from '../Input'
import style from './style.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <p>
        ac01 <span>.</span>
      </p>

      <div className={style.search_container}>
        <Input
          name="search"
          className={style.seach_input}
          placeholder="Buscar na plataforma"
        />
      </div>

      <div className={style.user_container}>
        <div className={style.icon_box}>
          <Bell size={23} color={'#9699B0'} />
          <UserPlus size={23} color={'#9699B0'} />
        </div>

        <div className={style.user_box}>
          <div>
            <p>Thalles Ian</p>
            <span>thallesyam@gmail.com</span>
          </div>

          <img src="https://github.com/thallesyam.png" alt="" />
        </div>
      </div>
    </header>
  )
}
