import type { Metadata } from 'next'
import './globals.scss'
import { CartContextProvider } from '@/context/cartContext'

export const metadata: Metadata = {
  title: 'E commerce PDP',
  description: 'Display Product',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  )
}
