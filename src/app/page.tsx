import Header from '@/components/Header/Header'
import ProductImages from '@/components/ProductImages/ProductImages'

export default function Home() {
  return (
    <>
      <Header />
      <main className='wrapper'>
        <ProductImages />
      </main>
    </>
  )
}
