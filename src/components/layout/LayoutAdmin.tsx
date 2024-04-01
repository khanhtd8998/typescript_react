// LayoutUser.tsx
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../admin/HeaderAdmin';
import Footer from '../Footer';



const AdminLayout = () => {
    return (
        <>
            <HeaderAdmin />
            <Outlet />
            <Footer />
        </>
    );
}

export default AdminLayout;
