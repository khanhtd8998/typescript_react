import axios from 'axios';
import { useEffect, useState } from 'react'
import instance from '~/apis';
import ProductList from '~/components/ProductList'
import { TProduct } from '~/types/Product'

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  //Cách 1:
  // useEffect(() => {
  //   fetch('http://localhost:3000/products')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  // }, [])

  //Cách 2
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts()
  }, [])
  return (
    <div>
      <div className='banner'>
        <img className='tw-w-full tw-h-[20rem]' src='https://www.paragyte.com/img/React_Banner.png' alt='' />
      </div>
      <ProductList products={products} />
      <div className="mb-3"></div>
    </div>
  )
}

export default Home
