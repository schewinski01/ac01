import { TreeStructure, User, Table, GitBranch } from 'phosphor-react'

import { SidebarLink } from '../SidebarLink'
import { SidebarItem } from '../SidebarItem'
import style from './style.module.css'

export function Sidebar() {
  return (
    <aside className={style.container}>
      <SidebarItem title={'GERAL'}>
        <SidebarLink
          title={'Dashboard'}
          Icon={TreeStructure}
          link={'/dashboard'}
        />
        <SidebarLink title={'Usuários'} Icon={User} link={'/users'} />
      </SidebarItem>
    </aside>
  )
}
