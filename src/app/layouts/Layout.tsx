import type React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import { Fragment, useState } from "react";
import SideNavOverlay from "./SideNav/SideNavOverlay";

const MainLayout: React.FC = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (<div className="flex w-full  h-full  ">
        <Header />
        <SideNav />
        {/* <SideNavOverlay isOpen={isMobileNavOpen} onClose={() => setMobileNavOpen(false)} /> */}
        <main className="ml-16 mt-16 sm:ml-52   transition-all duration-300 bg-light-bg-primary w-full">
            <Outlet />
        </main>
    </div>)
}
export default MainLayout;  