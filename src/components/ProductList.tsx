import { TProduct } from '~/types/Product'
import Product from './Product'
type TProps = {
  products: TProduct[];
}
const ProductList = (props: TProps) => {
  return (
    <div className='container'>
      <div className='row mx-auto'>
        {props.products.map((product: TProduct) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
