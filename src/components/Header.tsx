import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='nav-link' to='/'>
          <img className="tw-w-[5rem]" src={"data:image/png;base64,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"} alt="" />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/shop'>
                Shop
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
