import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col w-auto">
            <main className="flex-1">
            <Header />
                <Outlet />

            </main>

            <Footer />
            
        </div>
    );
}