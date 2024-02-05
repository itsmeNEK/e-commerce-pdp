import { useState } from 'react'
import Style from './QuantityAddCart.module.scss'
import IconButton from '@/components/common/buttons/IconButton'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import CartSvgIcon from '@/components/common/svg/CartSvgIcon'
import MinusSvgIcon from '@/components/common/svg/MinusSvgIcon'
import PlusSvgIcon from '@/components/common/svg/PlusSvgIcon'
import { useCartContext } from '@/context/cartContext'
import { TProduct } from '@/types/Cart'

export default function QuantityAddCart({
  product = {} as TProduct,
}: {
  product?: TProduct
}) {
  const { addToCart } = useCartContext()
  const [quantity, setQuantity] = useState(1)
  const handleAddQuantity = () => {
    setQuantity((prevVal) => {
      return prevVal + 1
    })
  }
  const handleMinusQuantity = () => {
    setQuantity((prevVal) => {
      return prevVal === 1 ? 1 : prevVal - 1
    })
  }
  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }
  return (
    <section className={Style['quantity-add']}>
      <div className={Style['quantity']}>
        <IconButton
          onClick={handleMinusQuantity}
          type='button'
          aria-label='Minus Button'
          className={Style['quantity__minus-plus-btn']}
        >
          <MinusSvgIcon aria-hidden />
        </IconButton>
        <span aria-label='Quantity Count'>{quantity}</span>
        <IconButton
          onClick={handleAddQuantity}
          type='button'
          aria-label='Plus Button'
          className={Style['quantity__minus-plus-btn']}
        >
          <PlusSvgIcon aria-hidden />
        </IconButton>
      </div>
      <PrimaryButton
        type='button'
        onClick={handleAddToCart}
        aria-label='Add to cart'
        className={Style['quantity-add__add-button']}
      >
        <CartSvgIcon aria-hidden />
        Add to cart
      </PrimaryButton>
    </section>
  )
}
