'use client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { TCart, TCartItems, TImage, TImages, TProduct } from '@/types/Cart'

const initialState: TCart = {
  smallImages: [],
  largeImages: [],
  cartItems: [],
  product: {
    id: 0,
    company: '',
    title: '',
    description: '',
    price: 0,
    discount: 0,
    thumbnail: {
      image: '',
      alt: '',
    },
  },
  addToCart: (product: TProduct, quantity: number) => {
    console.log(product, quantity)
  },
}

const CartContext = createContext<TCart>(initialState)

type Props = {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [smallImages, setSmallImages] = useState(initialState.smallImages)
  const [largeImages, setLargeImages] = useState(initialState.largeImages)
  const [product, setProduct] = useState(initialState.product)
  const [cartItems, setCartItems] = useState(initialState.cartItems)

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      const productsData = data.products[0]
      const { id, company, title, description, price, discount, thumbnail } =
        productsData
      setProduct({
        id,
        company,
        title,
        description,
        price,
        discount,
        thumbnail,
      })
      const { smallImages, largeImages } = productsData.images.reduce(
        (result: TImages, item: TImage) => {
          item.small
            ? result.smallImages.push(item)
            : result.largeImages.push(item)
          return result
        },
        { smallImages: [], largeImages: [] }
      )

      setSmallImages(smallImages)
      setLargeImages(largeImages)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
  const addToCart = useCallback(
    (product: TProduct, quantity: number) => {
      const exists = cartItems?.find(
        (item: TCartItems) => item.product.id === product.id
      )

      if (!exists) {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { product, quantity } as TCartItems,
        ])
        return
      }
      setCartItems((prevCartItems) =>
        prevCartItems.map((item: TCartItems) =>
          item.product.id === product.id
            ? { ...item, quantity: Number(item.quantity) + quantity }
            : item
        )
      )
    },
    [cartItems]
  )

  const contextValue = useMemo(
    () => ({
      largeImages,
      smallImages,
      product,
      cartItems,
      addToCart,
    }),
    [largeImages, smallImages, product, cartItems, addToCart]
  )
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }
  return context
}
