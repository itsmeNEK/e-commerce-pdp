'use client'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { TCartContext } from '@/types/Cart'

const initialState: TCartContext = {
  totalPrice: 0,
}

const CartContext = createContext<TCartContext>(initialState)

interface Props {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [totalPrice] = useState<number>(initialState.totalPrice)

  const contextValue = useMemo(() => ({ totalPrice }), [totalPrice])

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
