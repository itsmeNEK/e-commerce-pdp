import { useRef, useState } from 'react'
import Style from './CartCard.module.scss'
import IconButton from '@/components/common/buttons/IconButton'
import CartSvgIcon from '@/components/common/svg/CartSvgIcon'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useClickOutside } from '@/hooks/useOnClickOutside'

export default function CartCard() {
  const [showCart, setShowCart] = useState(false)
  const isDesktop = useMediaQuery(1440)
  const isMobile = useMediaQuery(765)
  const [cartCount] = useState<number>(0)
  const cartCardRef = useRef<HTMLDivElement>(null)
  const cartButtonRef = useRef<HTMLButtonElement | null>(null)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  const handleClickOutside = () => {
    setShowCart(false)
  }
  useClickOutside([cartCardRef, cartButtonRef], handleClickOutside)
  return (
    <>
      <IconButton
        ref={cartButtonRef}
        type='button'
        className={Style.cart_button}
        aria-label='Cart Button'
        onClick={handleShowCart}
      >
        {cartCount > 0 && (
          <span className={Style.cart_button__count}>{cartCount}</span>
        )}
        <CartSvgIcon aria-hidden />
      </IconButton>
      {showCart && (
        <div
          ref={cartCardRef}
          className={`${Style.cart_card} 
          ${isDesktop && Style.cart_card__desktop_view}
          ${isMobile && Style.cart_card__mobile_view}
          `}
        >
          <span className={Style.cart_card__title}>Cart</span>
          <div className={Style.cart_card__body}>
            {cartCount >= 1 ? (
              <span>cart items</span>
            ) : (
              <span>Your cart is empty.</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
