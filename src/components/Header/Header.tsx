'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Style from './Header.module.scss'
import CartCard from './SubComponents/CartCard/CartCard'
import NavItems from './SubComponents/NavItems/NavItems'
import Sidebar from './SubComponents/Sidebar/Sidebar'
import Avatar from '@/assets/image-avatar.png'
import BrandSvgIcon from '@/components/common/svg/BrandSvgIcon'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Header() {
  const isMobile = useMediaQuery(678)
  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact']
  return (
    <header className={`${Style.header} ${isMobile && Style.header__mobile}`}>
      <div className={Style.brand_nav_container}>
        {isMobile && <Sidebar navItems={navItems} />}
        <Link href='/' aria-label='Home'>
          <BrandSvgIcon aria-hidden />
        </Link>
        {!isMobile && <NavItems navItems={navItems} />}
      </div>

      <div className={Style.cart_avatar_container}>
        <CartCard />
        <Image
          priority
          className={Style.cart_avatar_container__avatar}
          src={Avatar}
          alt='user-avatar'
        />
      </div>
    </header>
  )
}
