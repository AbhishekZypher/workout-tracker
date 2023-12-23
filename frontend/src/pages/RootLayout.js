import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
        </div>
    )
};

export default RootLayout;