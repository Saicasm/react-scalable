import type React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import { Fragment } from "react";


const MainLayout: React.FC = () => {
    return (<Fragment>
        <Header />
        <SideNav />
        <main className="">
            <Outlet />
        </main>
    </Fragment>)
}
export default MainLayout;  