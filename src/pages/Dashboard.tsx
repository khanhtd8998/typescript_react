import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import instance from "~/apis";
import { TProduct } from "~/types/Product";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const { data } = await instance.get("/products");
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllProducts()
    }, [])
    console.log(products);
    return (
        <>
            <h1 className="tw-text-2xl fs-3 text-center my-4">Danh sách sản phẩm</h1>
            {/* <div className="container"></div> */}
            <table className="table text-center border-1">
                <thead className="table-light border-2 fs-5">
                    <th className="tw-w-[5%]">STT</th>
                    <th className="tw-w-[20%]">Tên</th>
                    <th className="tw-w-[10%]">Ảnh</th>
                    <th className="">Giá</th>
                    <th className="tw-w-[50%]">Mô tả</th>
                    <th className="tw-w-[20%]">Hành động</th>
                </thead>
                <tbody>
                    {
                        products.map((product: TProduct, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td><img className="mx-auto tw-w-[4rem] tw-h-[4rem]" src={product.thumbnail} alt="" /></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link className="btn btn-warning mx-1" to={`/admin/update/${product.id}`}>Sửa</Link>
                                    <button className="btn btn-danger mx-1">Xóa</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default Dashboard