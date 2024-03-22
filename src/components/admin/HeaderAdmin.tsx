import React from 'react'

type Props = {}

const HeaderAdmin = (props: Props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  tw-bg-[#1a94ff]">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/admin">Trang chủ</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/admin/add">Thêm</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="/admin" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sản phẩm
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="./admin/add">Thêm</a></li>
                                    <li><a className="dropdown-item" href="/admin">Danh sách</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-disabled="true" href="/">Về Website</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                            <button className="btn btn-outline-dark tw-w-[100x]" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderAdmin