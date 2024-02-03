'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { TCart, TImage, TImages } from '@/types/Cart'

const initialState: TCart = {
  totalPrice: 0,
  smallImages: [],
  largeImages: [],
}

const CartContext = createContext<TCart>(initialState)

type Props = {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [totalPrice] = useState(initialState.totalPrice)
  const [smallImages, setSmallImages] = useState(initialState.smallImages)
  const [largeImages, setLargeImages] = useState(initialState.largeImages)

  const contextValue = useMemo(
    () => ({ totalPrice, largeImages, smallImages }),
    [totalPrice, largeImages, smallImages]
  )

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      const productsData = data.products[0]
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
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
