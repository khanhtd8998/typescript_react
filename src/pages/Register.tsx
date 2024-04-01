import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import instance from "~/apis";
import { TUser } from "~/types/User"

const schemaUser = Joi.object({
  username: Joi.string().required().min(3).max(255).messages({
    'string.empty': 'Không được trống thông tin',
    'any.required': 'Thông tin bắt buộc',
    'string.min': 'Tài khoản phải có ít nhất {#limit} ký tự',
    'string.max': 'Tài khoản không được vượt quá {#limit} ký tự',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Không được trống thông tin',
    'any.required': 'Thông tin bắt buộc',
    'string.min': 'Mật khẩu phải có ít nhất {#limit} ký tự',
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'Thông tin bắt buộc',
    'string.email': 'Email không đúng định dạng'
  }),
  // confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
  //   'string.empty': 'Không được trống thông tin',
  //   'any.only': 'Mật khẩu nhập lại không đúng',
  // })
});
const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUser>({
    resolver: joiResolver(schemaUser)
  })
  const onSubmit: SubmitHandler<TUser> = (user) => {
    (
      async () => {
        const { data } = await instance.post("/register", user);
        console.log(data);
        alert("Đăng ký thành công")
        navigate("/login")
      }
    )()
  }
  return (
    <div className='container row mx-auto my-2 py-5 tw-bg-slate-100'>
      <div className='col-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-outline mb-1">
            <label className="form-label fw-bold" htmlFor="form2Example1">Username</label>
            <input type="text" id="username" className="form-control"
              {...register("username", { required: true })}
            />
            {errors.username && (<span className="text-danger">{errors.username.message}</span>)}
          </div>
          <div className="form-outline my-3">
            <label className="form-label fw-bold" htmlFor="form2Example1">Email address</label>
            <input type="email" id="email" className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
          </div>

          <div className="form-outline my-1">
            <label className="form-label fw-bold" htmlFor="form2Example2">Password</label>
            <input type="password" id="password" className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}

          </div>
          {/* <div className="form-outline mb-1">
            <label className="form-label" htmlFor="form2Example2">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control" />
            {errors.confirmPassword && (<span className="text-danger">{errors.confirmPassword.message}</span>)}

          </div> */}

          <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>

          <div className="text-center">
            {/* <p>Not a member? <a href="#!">Register</a></p> */}
            <p>Or sign up with:</p>
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
  )
}

export default Register