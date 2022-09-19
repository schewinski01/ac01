import { IconProps } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'
import style from './style.module.css'

type Props = {
  title: string
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  link: string
}

export function SidebarLink({ title, link, Icon }: Props) {
  const { pathname } = useLocation()
  const isActiveLink = pathname.toLowerCase().includes(`${link.toLowerCase()}`)

  return (
    <Link
      to={link}
      className={`${style.container} ${isActiveLink ? style.isActive : ''}`}
    >
      <Icon size={23} />
      <p>{title}</p>
    </Link>
  )
}
