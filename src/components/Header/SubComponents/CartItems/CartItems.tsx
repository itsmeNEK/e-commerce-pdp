import Image from 'next/image'
import { useRef } from 'react'
import Style from './CartItems.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import DeleteSvgIcon from '@/components/common/svg/DeleteSvgIcon'
import { useCartContext } from '@/context/cartContext'
import renderTwoDecimalPlaces from '@/helperFunctions/renderTwoDecimalPlaces'
import { TCartItems } from '@/types/Cart'

type Props = {
  cartItems: TCartItems[]
}

type TotalPriceProps = {
  discountPrice: number
  quantity: number
}
type DiscountPriceProps = {
  price: number
  discount: number
}

export default function CartItems({ cartItems }: Props) {
  const discountPrice = useRef<number>(0)
  const totalPrice = useRef<number>(0)
  const { deleteToCart } = useCartContext()

  const renderTotalPrice = ({ discountPrice, quantity }: TotalPriceProps) => {
    return renderTwoDecimalPlaces(
      (totalPrice.current = discountPrice * quantity)
    )
  }
  const renderDiscountPrice = ({ price, discount }: DiscountPriceProps) => {
    return (discountPrice.current = price * discount)
  }
  const handleDelete = (productId: number) => {
    deleteToCart(productId)
  }
  return (
    <section className={Style['container']} title='Cart Items'>
      {cartItems.map((item: TCartItems, index: number) => {
        return (
          <div className={Style['cart-item']} key={index}>
            <Image
              priority
              width={50}
              height={50}
              className={Style['cart-item__thumb']}
              src={item.product.thumbnail.image as string}
              alt={item.product.thumbnail.alt as string}
            />
            <div className={Style['cart-item__detail']}>
              <p className={Style['cart-item__detail__title']}>
                {item.product.title}
              </p>
              <span className={Style['cart-item__detail__price']}>
                $
                {renderDiscountPrice({
                  price: item.product.price,
                  discount: item.product.discount,
                })}
              </span>
              <span>x</span>
              <span className={Style['cart-item__detail__quantity']}>
                {item.quantity}
              </span>
              <span className={Style['cart-item__detail__total']}>
                $
                {renderTotalPrice({
                  discountPrice: discountPrice.current,
                  quantity: item.quantity,
                })}
              </span>
            </div>
            <PrimaryButton
              onClick={() => {
                handleDelete(item.product.id)
              }}
              type='button'
              aria-label={`Delete ${item.product.title} from cart`}
            >
              <DeleteSvgIcon aria-hidden />
            </PrimaryButton>
          </div>
        )
      })}
      <PrimaryButton
        className={Style['container__checkout']}
        type='button'
        aria-label='Checkout Button'
      >
        Checkout
      </PrimaryButton>
    </section>
  )
}
