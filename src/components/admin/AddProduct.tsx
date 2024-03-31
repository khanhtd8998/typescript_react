import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TProduct } from '~/types/Product'

type Props = {
  onAdd: (data: TProduct) => void
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

const AddProduct = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onsubmit: SubmitHandler<TProduct> = (data) => {
    onAdd(data)
  }
  return (
    <>
      <div className="main my-5">
        <div className="card mt-1">
          <div className="card-header">
            <h5 className="">THÊM SẢN PHẨM</h5>
          </div>
          <div className="card-body pt-1">
            <form onSubmit={handleSubmit(onsubmit)} className="row g-3 needs-validation">
              <div className="col-md-6">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  {...register("title", { required: true })}
                  type="text" className="form-control"
                  id="title"
                />
                {errors.title && <span className='text-danger'>{errors.title.message}</span>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Giá</label>
                <input
                  {...register("price", { required: true })}

                  type="text"
                  className="form-control"
                  id="price"
                />
                {errors.price && <span className='text-danger'>{errors.price.message}</span>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Mô tả</label>
                <input
                  {...register("description",{ required: true })}
                  type="text"
                  className="form-control"
                  id="description"
                />
                {errors.description && <span className='text-danger'>{errors.description.message}</span>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Ảnh</label>
                <input
                  {...register("thumbnail", { required: true })}
                  type="text"
                  className="form-control"
                  id="thumbnail"
                />
                {errors.thumbnail && <span className='text-danger'>{errors.thumbnail.message}</span>}

              </div>
              <div className="col-12">
                <button
                  id="add-btn"
                  className="btn btn-primary"
                  type="submit"
                >Thực hiện</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct