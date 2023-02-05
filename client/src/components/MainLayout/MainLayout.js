import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

/*
 * React-router-dom navigated page builds at "Outlet" placeholder
 */

const MainLayout = () => {
  return (
    <div className="main-layout">
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
