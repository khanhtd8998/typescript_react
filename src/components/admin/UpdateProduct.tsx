import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getProduct } from '~/apis/products'
import { TProduct } from '~/types/Product'

type Props = {
    onEdit: (data: TProduct) => void,
}
const schemaProduct = Joi.object({
    title: Joi.string().required().min(3).max(255).messages({
        'string.empty': 'Tiêu đề không được trống',
        'any.required': 'Tiêu đề là bắt buộc',
        'string.min': 'Tiêu đề phải có ít nhất {#limit} ký tự',
        'string.max': 'Tiêu đề không được vượt quá {#limit} ký tự',
    }),
    price: Joi.number().required().min(0).messages({
        'number.base': 'Giá phải là một số',
        'any.required': 'Giá là bắt buộc',
        'number.min': 'Giá không được nhỏ hơn {#limit}',
    }),
    description: Joi.string().required().messages({
        'string.empty': 'Mô tả không được để trống',
    }),
    thumbnail: Joi.string().required().messages({
        'string.empty': 'Ảnh thumbnail không được để trống',
    }),
});
const UpdateProduct = ({ onEdit }: Props) => {
    const [product, setProduct] = useState<TProduct | null>(null)
    const { id } = useParams();
    useEffect(() => {
        if (!id) return
        (async () => {
            const data = await getProduct(`${id}`)
            setProduct(data)
        })()
    }, [id])
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TProduct>({
        resolver: joiResolver(schemaProduct)
    })
    const onSubmit: SubmitHandler<TProduct> = (data) => {
        console.log(data);
        if (id) {
            onEdit({ ...data, id })
        }
    }

    console.log(product);
    return (
        <>
            <div className="main">
                <div className="card mt-1">
                    <div className="card-header">
                        <h5 className="">Cập nhật sản phẩm</h5>
                    </div>
                    <div className="card-body pt-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="row g-3" >
                            <div className="row g-3">
                                <div className="col-md-8">
                                    <div className="col-md-12">
                                        <label htmlFor="" className="form-label">Tên sản phẩm</label>
                                        <input type="text" className="form-control" id="title"
                                            defaultValue={product?.title}
                                            {...register("title")}
                                        />
                                        {errors.title && <span className='text-danger'>{errors.title.message}</span>}
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-2 my-3">
                                            <label htmlFor="" className="form-label">Giá</label>
                                            <input type="text" className="form-control" id="price"
                                                defaultValue={product?.price}
                                                {...register("price")}
                                            />
                                            {errors.price && <span className='text-danger'>{errors.price.message}</span>}

                                        </div>
                                        <div className="col-md-10 my-3">
                                            <label htmlFor="" className="form-label">Hình ảnh</label>
                                            <input type="text" className="form-control" id="thumbnail"
                                                defaultValue={product?.thumbnail}
                                                {...register("thumbnail")}
                                            />
                                            {errors.thumbnail && <span className='text-danger'>{errors.thumbnail.message}</span>}

                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom05" className="form-label">Mô tả</label>
                                        <input className="form-control" id="description"
                                            defaultValue={product?.description}
                                            {...register("description")}
                                        />
                                        {errors.description && <span className='text-danger'>{errors.description.message}</span>}

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