import { useEffect, useState } from 'react'
import instance from '~/apis';
import { TProduct } from '~/types/Product'
import Product from './Product'
// type TProps = {
//   products: TProduct[];
// }
const ProductList = () => {
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
    <>
      <div className='banner'>
        <img className='tw-w-full tw-h-[20rem]' src='https://www.paragyte.com/img/React_Banner.png' alt='' />
      </div>
      <div className='container my-3'>
        <div className='row mx-auto'>
          {products.map((product: TProduct) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
