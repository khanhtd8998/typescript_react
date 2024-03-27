import { useState } from 'react'


const Shop = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">

                  <div className="row">

                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i
                        className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                            className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                              </div>
                              <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rest of your shopping cart items */}

                    </div>
                    <div className="col-lg-5">

                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          {/* Card details form */}
                          <form className='tw-w-full'>

                            {/* Card type */}
                            <div className="mb-2">
                              <p className="small mb-2">Card type</p>
                              <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                              <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2"></i></a>
                              <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2"></i></a>
                              <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
                            </div>

                            {/* Cardholder's Name */}
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="typeName"
                                placeholder="Cardholder's Name"
                                value={cardholderName}
                                onChange={(e) => setCardholderName(e.target.value)}
                              />
                              <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                            </div>

                            {/* Card Number */}
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="typeText"
                                placeholder="1234 5678 9012 3457"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                minLength={19}
                                maxLength={19}
                              />
                              <label className="form-label" htmlFor="typeText">Card Number</label>
                            </div>

                            {/* Expiration & CVV */}
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="typeExp"
                                    placeholder="MM/YYYY"
                                    value={expiration}
                                    onChange={(e) => setExpiration(e.target.value)}
                                    minLength={7}
                                    maxLength={7}
                                  />
                                  <label className="form-label" htmlFor="typeExp">Expiration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    id="typeText"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    minLength={3}
                                    maxLength={3}
                                  />
                                  <label className="form-label" htmlFor="typeText">CVV</label>
                                </div>
                              </div>
                            </div>

                            {/* Checkout button */}
                            <button type="button" className="btn btn-info btn-block btn-lg tw-w-full">
                              <div className="d-flex justify-content-between tw-w-[full]">
                                <span>$4818</span>
                                <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                              </div>
                            </button>

                          </form>

                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop