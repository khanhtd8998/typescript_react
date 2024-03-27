
import ProductList from '~/components/ProductList'

const Home = () => {
  return (
    <div>
      <div className='banner'>
        <img className='tw-w-full tw-h-[20rem]' src='https://www.paragyte.com/img/React_Banner.png' alt='' />
      </div>
      <ProductList />
      <div className="mb-3"></div>
    </div>
  )
}

export default Home
