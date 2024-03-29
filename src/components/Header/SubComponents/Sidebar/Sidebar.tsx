import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Style from './Sidebar.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import CloseSvgIcon from '@/components/common/svg/CloseSvgIcon'
import MenuIcon from '@/components/common/svg/MenuSvgIcon'
import { useClickOutside } from '@/hooks/useOnClickOutside'

interface SidebarProps {
  navItems: string[]
}
const Sidebar = ({ navItems }: SidebarProps) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setShowSidebar(!showSidebar)
  }
  const handleClickOutside = () => {
    setShowSidebar(false)
  }
  useClickOutside([closeButtonRef, sidebarRef], handleClickOutside)
  return (
    <aside className={Style['sidebar']}>
      <PrimaryButton
        ref={closeButtonRef}
        type='button'
        onClick={handleButtonClick}
        aria-label='Menu Button'
      >
        <MenuIcon aria-hidden />
      </PrimaryButton>
      {showSidebar && <div className={Style['sidebar__overlay']}></div>}
      <div
        data-testid='sidebar'
        className={`${Style['sidebar__container']} ${showSidebar && Style['menu-open']}`}
        ref={sidebarRef}
      >
        <PrimaryButton
          type='button'
          className={Style['close-button']}
          onClick={handleButtonClick}
          aria-label='Close Button'
        >
          <CloseSvgIcon aria-hidden />
        </PrimaryButton>
        <ul>
          {navItems.map((item: string, index: number) => (
            <li key={index}>
              <Link href={`/#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
