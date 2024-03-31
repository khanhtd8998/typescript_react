import { useEffect, useState } from 'react'
import instance from '~/apis';
import { TProduct } from '~/types/Product'
import Product from './Product'
import { isEmpty } from 'lodash';
// type TProps = {
//   products: TProduct[];
// }
const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [page, setPage] = useState(1);


  return (
    <>
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
