import { ReactNode } from 'react'

import style from './style.module.css'

type Props = {
  title: string
  children: ReactNode
}

export function SidebarItem({ title, children }: Props) {
  return (
    <div className={style.sidebar}>
      <p>{title}</p>

      <div className={style.sidebar_item_container}>{children}</div>
    </div>
  )
}
