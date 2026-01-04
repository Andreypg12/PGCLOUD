import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="flex min-h-screen h-screen flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />

            </div>

            <Footer />
            
        </div>
    );
}