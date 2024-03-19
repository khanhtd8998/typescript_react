import { TProduct } from '~/types/Product'

type Props = { product: TProduct }

const Product = (props: Props) => {
    return (
        <div className='col-3 mb-5'>
            <div className='card tw-w-[18rem]'>
                <a href=""><img src={props.product.thumbnail} className='card-img-top tw-h-[10rem]' alt='...' /></a>
                <div className='card-body tw-h-[11rem]'>
                    <div className='mb-3 tw-h-[2.7rem]'>
                        <h5 className='card-title mb-3 '>{props.product.title}</h5>
                    </div>
                    <div className='mb-3'>
                        <p className='card-text mt-3'>{props.product.description.substring(0, 100)}</p>
                    </div>
                </div>
                <div className='mb-3 d-flex justify-content-center'>
                    <button className='btn btn-primary'>Xem thêm</button>
                </div>
            </div>
        </div>
    )
}

export default Product