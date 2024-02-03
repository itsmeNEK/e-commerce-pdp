import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Style from './NavigationButton.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

const NavigationButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${Style.nav_button}  ${className} `} {...props}>
      {children}
    </button>
  )
}

export default NavigationButton
