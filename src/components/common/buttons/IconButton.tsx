import {
  ReactNode,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react'
import Style from './IconButton.module.scss'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

const IconButton = forwardRef(
  (
    { children, className, ...props }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`${className} ${Style['icon-button']}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'

export default IconButton
