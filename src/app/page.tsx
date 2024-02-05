import Header from '@/components/Header/Header'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import ProductImages from '@/components/ProductImages/ProductImages'

export default function Home() {
  return (
    <>
      <Header />
      <main className='wrapper'>
        <ProductImages />
        <ProductDetails />
      </main>
    </>
  )
}
