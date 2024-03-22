// LayoutUser.tsx
import HeaderAdmin from '../admin/HeaderAdmin';
import Footer from '../Footer';

type Props = {
    Components: React.ComponentType<any>;
}

const AdminLayout: React.FC<Props> = ({ Components }) => {
    return (
        <>
            <HeaderAdmin />
            <Components />
            <Footer />
        </>
    );
}

export default AdminLayout;
