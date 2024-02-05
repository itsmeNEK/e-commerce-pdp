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

export default function Header() {
  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact']
  return (
    <header className={Style['header']}>
      <div className={Style['brand-nav-container']}>
        <Sidebar navItems={navItems} />
        <Link href='/' aria-label='Home'>
          <BrandSvgIcon aria-hidden />
        </Link>
        <NavItems navItems={navItems} />
      </div>

      <div className={Style['cart-avatar-container']}>
        <CartCard />
        <Image
          priority
          className={Style['cart-avatar-container__avatar']}
          src={Avatar}
          alt='user-avatar'
        />
      </div>
    </header>
  )
}
