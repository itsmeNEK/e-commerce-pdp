import { useRef, useState } from 'react'
import CartItems from '../CartItems/CartItems'
import Style from './CartCard.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import CartSvgIcon from '@/components/common/svg/CartSvgIcon'
import { useCartContext } from '@/context/cartContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useClickOutside } from '@/hooks/useOnClickOutside'

export default function CartCard() {
  const [showCart, setShowCart] = useState(false)
  const isDesktop = useMediaQuery(765)
  const { cartItems } = useCartContext()
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
      <PrimaryButton
        ref={cartButtonRef}
        type='button'
        className={Style['cart-button']}
        aria-label='Cart Button'
        onClick={handleShowCart}
      >
        {cartItems.length > 0 && (
          <span className={Style.cart_button__count}>{cartItems.length}</span>
        )}
        <CartSvgIcon aria-hidden />
      </PrimaryButton>
      {showCart && (
        <div
          data-testid='cart-card'
          ref={cartCardRef}
          className={`${Style['cart-card']} 
          ${isDesktop && Style['cart-card--desktop']}
          `}
        >
          <span className={Style.cart_card__title}>Cart</span>
          <div className={Style.cart_card__body}>
            {cartItems.length > 0 ? (
              <CartItems cartItems={cartItems} />
            ) : (
              <span>Your cart is empty.</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
