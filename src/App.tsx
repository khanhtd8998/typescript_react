import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import UserLayout from "./components/layout/LayoutUser";
import AdminLayout from "./components/layout/LayoutAdmin";
import AddProduct from "./components/admin/AddProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import Notfound from "./pages/Notfound";
import { useEffect, useState } from "react";
import { TProduct } from "./types/Product";
import { createProduct, getProducts, removeProduct, updateProduct } from "./apis/products";
import { isEmpty } from "lodash";



function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })()
  }, [])
  const handleAddProduct = (data: TProduct) => {
    (async () => {
      const newProduct = await createProduct(data);
      setProducts([...products, newProduct]);
      navigate('/admin')
      alert("Thêm sản phẩm thành công")
    })()
  }

  const handleDeleteProduct = (id: number | string | undefined) => {
    (async () => {
      if(confirm('Are you sure you want to delete this product?')){
        await removeProduct(id);
        setProducts(products.filter(p => p.id != id  ));
      }
    })();
  }

  const handleUpdateProduct = (data: TProduct) => {
    (async () => {
      const product = await updateProduct(data);
      setProducts(
        products.map((p) => (p.id == product.id ? product : p))
      )
      navigate('/admin')
    })()
  }
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<UserLayout/>}>
            <Route index element={<Home products={products} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard products={products} onDelete={handleDeleteProduct} />} />
            <Route path="/admin/add" element={<AddProduct onAdd={handleAddProduct} />} />
            <Route path="/admin/update/:id" element={<UpdateProduct onEdit={handleUpdateProduct} />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;