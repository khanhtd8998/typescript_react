import { useEffect, useState } from 'react'
import instance from '~/apis';
import { TProduct } from '~/types/Product'
import Product from './Product'
import { set } from 'lodash';
// type TProps = {
//   products: TProduct[];
// }
const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [page, setPage] = useState(1);
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
        const { data } = await instance.get(`/products?_page=${page}&_limit=10`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts()
  }, [page])
  return (
    <>
      <div className='container my-3'>
        <div className='row mx-auto'>
          {products.map((product: TProduct) => (
            <Product product={product} />
          ))}
        </div>
        <div className='mx-auto d-flex justify-content-center'>
          <nav aria-label="Page navigation example ">
            <ul className="pagination">
              <li className="page-item" ><a className="page-link" href="#" onClick={() => { setPage(page - 1) }}>Previous</a></li>
              <li className="page-item" ><a className="page-link" href="#" onClick={() => { setPage(page + 1) }}>Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ProductList
