'use client'
import Style from './ProductDetails.module.scss'
import QuantityAddCart from './SubComponents/QuantityAddCart/QuantityAddCart'
import { useCartContext } from '@/context/cartContext'
import renderTwoDecimalPlaces from '@/helperFunctions/renderTwoDecimalPlaces'

export default function ProductDetails() {
  const { product } = useCartContext()

  const prices = {
    price: renderTwoDecimalPlaces(product.price),
    discount: product.discount * 100,
    discountedPrice: renderTwoDecimalPlaces(product.price * product.discount),
  }

  return (
    <article className={Style['article']}>
      {product.title && (
        <>
          <section className={Style['article__container']}>
            <span className={Style['article__company']} title='Product Company'>
              {product.company}
            </span>
            <h1 className={Style['article__title']} title='Product Title'>
              {product.title}
            </h1>
            <p
              className={Style['article__description']}
              title='Product Description'
            >
              {product.description}
            </p>
            <div className={Style['price-container']}>
              <div className={Style['price-container__discounted-price']}>
                <span
                  className={Style['price-container__discounted-price__price']}
                >
                  ${prices.discountedPrice}
                </span>
                <span
                  className={
                    Style['price-container__discounted-price__discount']
                  }
                >
                  {prices.discount}%
                </span>
              </div>
              <p className={Style['price-container__original']}>
                ${prices.price}
              </p>
            </div>
          </section>
          <QuantityAddCart product={product} />
        </>
      )}
    </article>
  )
}
