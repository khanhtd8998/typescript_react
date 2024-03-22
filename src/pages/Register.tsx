import React from 'react'

type Props = {}

const Register = (props: Props) => {
  return (
    <div className='container row mx-auto my-2 py-5 tw-bg-slate-100'>
      <div className='col-6'>
        <form>
          <div className="form-outline mb-1">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">Username</label>
          </div>
          <div className="form-outline mb-1">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">Email address</label>
          </div>

          <div className="form-outline my-1">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label" htmlFor="form2Example2">Password</label>
          </div>
          <div className="form-outline mb-1">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label" htmlFor="form2Example2">Confirm Password</label>
          </div>

          <button type="button" className="btn btn-primary btn-block mt-1">Sign Up</button>

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