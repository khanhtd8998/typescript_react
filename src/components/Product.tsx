import { Link } from 'react-router-dom';
import { TProduct } from '~/types/Product'

type Props = { product: TProduct }

const Product = (props: Props) => {
    const calculateRatingStars = (rating: number) => {
        const stars = Array.from({ length: rating }, (_, index) => index + 1);
        return stars.map(() => <i className="fa-solid fa-star fa-xs" ></i>);
    };
    // const formatPrice = (price = "") => {
    //     return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    // };
    return (
        <div className='col-3 mb-5'>
            <div className='card tw-w-[18rem]'>
                <Link to={`/detail/${props.product.id}`}><img src={props.product.thumbnail} className='card-img-top tw-h-[10rem]' alt='...' /></Link>
                <div className='card-body tw-h-[14rem]'>
                    <div className=' tw-h-[3rem]'>
                        <p className='card-title mb-3 fs-5 '>{props.product.title}</p>
                    </div>
                    <div className="my-3 d-flex align-items-center">
                        <span className="tw-text-2xl tw-text-[#FF424E] tw-font-medium tw-p-0">
                            $ {props.product.price}
                        </span>
                        <span className='mx-3'>|</span>
                        <span>
                            {calculateRatingStars(props.product.rating)}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <span className='card-text mt-3'>{props.product.description.substring(0, 100)}</span>
                    </div>
                </div>
                <div className='mb-3 d-flex justify-content-center'>
                    <button className='btn btn-primary'>View more</button>
                </div>
            </div>
        </div>
    )
}

export default Product