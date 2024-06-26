// LayoutUser.tsx
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';



const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default UserLayout;
