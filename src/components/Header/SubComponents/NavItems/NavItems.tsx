import Style from './NavItems.module.scss'
interface SidebarProps {
  navItems: string[]
}

const NavItems = ({ navItems }: SidebarProps) => {
  return (
    <ul className={Style.nav}>
      {navItems.map((item: string) => (
        <li className={Style.nav__item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
export default NavItems
