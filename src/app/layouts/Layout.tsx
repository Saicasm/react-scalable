import type React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import { Fragment, useState } from "react";
import SideNavOverlay from "./SideNav/SideNavOverlay";

const MainLayout: React.FC = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (<Fragment>
        <Header />
        <SideNav />
        {/* <SideNavOverlay isOpen={isMobileNavOpen} onClose={() => setMobileNavOpen(false)} /> */}
        <main className="ml-16 mt-16 sm:ml-44 p-4 transition-all duration-300">
            <Outlet />
        </main>
    </Fragment>)
}
export default MainLayout;  