export type TImage = {
  image: string
  alt: string
  small: boolean
}
export type TImages = {
  smallImages: TImage[]
  largeImages: TImage[]
}
export type TProduct = {
  id?: number
  company?: string
  title?: string
  description?: string
  price?: number
  discount?: number
  thumbnail?: {
    image?: string
    alt?: string
  }
}

export type TCart = TImages & {
  totalPrice?: number
}
