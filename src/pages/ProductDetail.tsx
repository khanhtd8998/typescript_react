import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import instance from '~/apis';
import { TProduct } from '~/types/Product';
import { isEmpty } from 'lodash'
import Notfound from './Notfound';

const ProductDetail = () => {
    const calculateRatingStars = (rating: number) => {
        const stars = Array.from({ length: rating }, (_, index) => index + 1);
        return stars.map(() => <i className="fa-solid fa-star fa-xs" ></i>);
    };
    const { id } = useParams();
    const [product, setProduct] = useState<TProduct>();
    useEffect(() => {
        (async () => {
            const { data } = await instance.get(`/products/${id}`);
            setProduct(data);
        })()
    }, [])
    if (isEmpty(product)) {
        return (
            <Notfound />
        )
    }
    return (
        <>
            <div className="mt-4">
                <div
                    className="d-flex tw-gap-[100px] justify-content-center product-info tw-mx-auto"
                >
                    <div className="product-img">
                        <div
                            className="d-flex justify-content-center tw-w-[full] tw-h-[20rem] tw-py-[20px] border"
                        >
                            <img
                                className="tw-w-[20rem] tw-h-[full]"
                                src={product?.thumbnail}
                                alt=""
                            />
                        </div>
                        <div className="d-flex justify-content-between my-3 gap-2">
                            {
                                product?.images && product.images.map((imageUrl, index) => (
                                    <img
                                        className="tw-w-[7rem] tw-h-[5rem]"
                                        src={imageUrl}
                                        alt={`Image ${index + 1}`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="tw-w-[500px] p-3 border-start">
                        <div className="div">
                            <h3>{product?.title}</h3>
                            <span className='me-2'>{calculateRatingStars(+product?.rating!)}</span>
                            <span className="tw-text-gray-500">{product.brand || "Đang cập nhật"}</span>
                            <span className="tw-text-gray-500 mx-2">|</span>
                            <span className="tw-text-gray-500">Sales 1000+</span>
                        </div>
                        <div className="pb-2 border-bottom">
                            <div
                                className="price d-flex align-items-center gap-lg-3 my-2 p-1 tw-bg-[#FAFAFA]"
                            >
                                <p className="tw-text-[40px] tw-text-[#FF424E] tw-font-medium tw-p-0">
                                    {product?.price} $
                                </p>
                                <p className="tw-text-xl tw-text-[#ccc] tw-font-medium tw-pb-1">
                                    <del>{Math.ceil((product?.price / (100 - +product?.discountPercentage!)) * 100) || ""}</del>
                                </p>
                                <p
                                    className="discount tw-text-xl tw-text-[#FF424E] tw-font-medium tw-pb-2"
                                >
                                    -{Math.ceil(+product?.discountPercentage!) || "0"}%
                                </p>
                            </div>
                        </div>
                        <div className="py-2 border-bottom">
                            <div className="quantity">
                                <p className="tw-text-xl tw-font-medium">Quantity</p>
                                <button type="button" className="decrease py-2 px-3 border rounded-2">
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <input className="quantity_input border py-2 px-3 tw-w-[4rem]" type="number" value="1" min="1" />
                                <button type="button" className="increase py-2 px-3 border rounded-2">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button className="my-3 tw-min-h-[50px] tw-min-w-[300px] tw-text-white tw-bg-[#FF3945] rounded-2">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="tw-px-[100px] tw-py-[2rem]">
                    <h4 className="mb-3">Description</h4>
                    <p>
                        {product?.description}
                    </p>
                    {/* <div className="text-center">
                        <button className="my-3 btn btn-outline-primary tw-min-h-[50px] tw-min-w-[300px] tw-text-[#FF3945] tw-rounded-2">Xem Thêm Nội Dung</button>
                    </div> */}
                </div>
            </div>
        </>
    )

}

export default ProductDetail