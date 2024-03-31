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
import { createProduct, getProducts, removeProduct } from "./apis/products";



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
      setProducts([newProduct, ...products]);
      navigate('/admin')
      alert("Thêm sản phẩm thành công")
    })()
  }

  const handleDeleteProduct = (id: number | string) => {
    (async () => {
      if(confirm('Are you sure you want to delete this product?')){
        await removeProduct(id);
        setProducts(products.filter(p => p.id != id  ));
      }
    })();
  }
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home products={products} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/admin">
            <Route index element={<Dashboard products={products} onDelete={handleDeleteProduct} />} />
            <Route path="/admin/add" element={<AddProduct onAdd={handleAddProduct} />} />
            <Route path="/admin/update/:id" element={<UpdateProduct />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;