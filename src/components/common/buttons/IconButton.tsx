import {
  ReactNode,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react'
import Style from './IconButton.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const IconButton = forwardRef(
  (
    { children, className, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`${className} ${Style.icon_button}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

// Adding displayName for the component
IconButton.displayName = 'IconButton'

export default IconButton
