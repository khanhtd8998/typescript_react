import { useEffect, useState } from 'react'
import ProductList from '~/components/ProductList'
import { TProduct } from '~/types/Product'

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div>
      <div className='banner'>
        <img className='tw-w-full tw-h-[20rem]' src='https://www.paragyte.com/img/React_Banner.png' alt='' />
      </div>
      <h1 className='text-center my-3'>HOME</h1>
      <ProductList products={products} />
      <div className="mb-3"></div>
    </div>
  )
}

export default Home
