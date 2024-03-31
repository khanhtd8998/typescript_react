import { joiResolver } from '@hookform/resolvers/joi'
import { error } from 'console'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/types/Product'

type Props = {}
const schemaProduct = Joi.object({
    title: Joi.string().required().min(3).max(255),
    price: Joi.number().required().min(0),
    description: Joi.string().allow(null, ""),
    thumbnail: Joi.string().required().allow(null, ""),
})
const UpdateProduct = () => {
    const [product, setProduct] = useState<TProduct>()
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: joiResolver(schemaProduct)
    })
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [])
    return (
        <>
            <div className="main">
                <div className="card mt-1">
                    <div className="card-header">
                        <h5 className="">Cập nhật sản phẩm</h5>
                    </div>
                    <div className="card-body pt-1">
                        <form className="row g-3 needs-validation" >
                            <div className="row g-3">
                                <div className="col-md-8">
                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom01" className="form-label">Tên sản phẩm</label>
                                        <input type="text" className="form-control" id="title"
                                            defaultValue={product?.title}
                                        />
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-6 my-3">
                                            <label htmlFor="validationCustom02" className="form-label">Giá</label>
                                            <input type="text" className="form-control" id="original_price" defaultValue={product?.price} />
                                        </div>
                                        <div className="col-md-6 my-3">
                                            <label htmlFor="validationCustom04" className="form-label">Hình ảnh</label>
                                            <input type="text" className="form-control" id="rating_average" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom05" className="form-label">Mô tả</label>
                                        <textarea className="form-control" style={{ resize: "none" }} id="description" defaultValue={product?.description} />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <button id="update-btn" className="btn btn-primary my-3" type="submit">Cập nhật</button>
                                    </div>
                                </div>
                                <div className="col-md-3 m-5 mt-0">
                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom05" className="form-label"> </label>
                                        <img className="tw-w-[500px] tw-h-[390px]" src={product?.thumbnail} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct