import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

/*
 * React-router-dom navigated page builds at "Outlet" placeholder
 */

const MainLayout = () => {
  return (
    <div className="main-layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
