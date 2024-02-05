import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Style from './NavigationButton.module.scss'

type NavigationButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

const NavigationButton = ({
  children,
  className,
  ...props
}: NavigationButton) => {
  return (
    <button className={`${Style.nav_button}  ${className} `} {...props}>
      {children}
    </button>
  )
}

export default NavigationButton
