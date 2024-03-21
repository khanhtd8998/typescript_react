// LayoutUser.tsx
import Header from '../Header';
import Footer from '../Footer';

type Props = {
    Components: React.ComponentType<any>;
}

const UserLayout: React.FC<Props> = ({ Components }) => {
    return (
        <>
            <Header />
            <Components />
            <Footer />
        </>
    );
}

export default UserLayout;
