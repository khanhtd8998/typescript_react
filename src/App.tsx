import { Route, Routes } from "react-router-dom";
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



function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<UserLayout Components={Home} />} />
          <Route path="/shop" element={<UserLayout Components={Shop} />} />
          <Route path="/login" element={<UserLayout Components={Login} />} />
          <Route path="/detail/:id" element={<UserLayout Components={ProductDetail} />} />
          <Route path="*" element={<UserLayout Components={Notfound} />} />
          <Route path="/register" element={<UserLayout Components={Register} />} />
          <Route path="/admin" element={<AdminLayout Components={Dashboard} />} />
          <Route path="/admin/add" element={<AdminLayout Components={AddProduct} />} />
          <Route path="/admin/update/:id" element={<AdminLayout Components={UpdateProduct} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;