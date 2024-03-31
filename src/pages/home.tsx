
import Product from '~/components/Product';

import { TProduct } from '~/types/Product';
type Props = { products: TProduct[] };
const Home = ({products}: Props) => {
  return (
    <div>
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
      <div className="mb-3"></div>
    </div>
  )
}

export default Home
