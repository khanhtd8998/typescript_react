import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { stringify } from 'querystring';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import instance from '~/apis';
import { TUser } from '~/types/User';


const schemaUser = Joi.object({
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Không được trống thông tin',
    'any.required': 'Thông tin bắt buộc',
    'string.min': 'Mật khẩu phải có ít nhất {#limit} ký tự',
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'Thông tin bắt buộc',
    'string.email': 'Email không đúng định dạng'
  })
});
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: joiResolver(schemaUser)
  })
  // const onSubmit: SubmitHandler<TUser> = (user) => {
  //   (
  //     (async () => {
  //       const { data } = await instance.post('/login', user);
  //       if (data.accessToken) {
  //         localStorage.setItem('data', JSON.stringify(data));
  //         setTimeout(() => {
  //           navigate('/')
  //           window.location.reload()
  //         }, 1000)
  //       }
  //     })
  //   )()
  // }
  const onSubmit: SubmitHandler<TUser> = async (user) => {
    try {
      setIsLoading(true);

      const { data } = await instance.post('/login', user);
      if (data.accessToken) {
        localStorage.setItem('data', JSON.stringify(data));
        navigate('/');
        window.location.reload();

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='container row mx-auto my-2 py-5 tw-bg-slate-100'>
        <div className='col-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-outline mb-4">
              <label className="form-label fw-bold" htmlFor="email">Email address</label>
              <input type="email" id="email" className="form-control"
                {...register("email", { required: true })} />
              {errors.email && (<span className='text-danger'>{errors.email.message}</span>)}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label fw-bold" htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control"
                {...register("password", { required: true })} />
              {errors.password && (<span className='text-danger'>{errors.password.message}</span>)}
            </div>

            <div className="row my-3">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
                <div className="col mx-3">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>


            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center mb-1">
              <p>Not a member? <a href="/register">Register</a></p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
        <div className='col-6'>
          <img className='tw-h-[100%]' src={"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg"} />
        </div>
      </div>
    </>

  )
};

export default Login