import React from 'react'

type Props = {}

const AddProduct = () => {
  return (
    <>
      <div className="main my-5">
        <div className="card mt-1">
          <div className="card-header">
            <h5 className="">THÊM SẢN PHẨM</h5>
          </div>
          <div className="card-body pt-1">
            <form className="row g-3 needs-validation">
              <div className="col-md-6">
                <label className="form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Giá</label>
                <input type="text" className="form-control" id="original_price" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Mô tả</label>
                <input type="text" className="form-control" id="description" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Ảnh</label>
                <input type="text" className="form-control" id="images" required />
              </div>
              <div className="col-12">
                <button id="add-btn" className="btn btn-primary" type="submit">Thực hiện</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct