import Link from 'next/link'
import Style from './NavItems.module.scss'
interface NavItemsProps {
  navItems: string[]
}

const NavItems = ({ navItems }: NavItemsProps) => {
  return (
    <ul className={Style['nav']}>
      {navItems.map((item: string) => (
        <li className={Style['nav__item']} key={item}>
          <Link href={`/#${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )
}
export default NavItems
