import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import React, { FC } from "react";
import Topbar from "../common/components/topbar";
import Navbar from "../common/components/navbar";
import HomePage from "../pages/home/home";
import AboutPage from "../pages/about/about_page";
import Footer from "../common/components/footer";
import ServicesPage from "../pages/services/services_page";
import PricePage from "../pages/price/price_page";
import BatchesPage from "../pages/batches/batches_page";
import ConactPage from "../pages/contact/contact_page";

const MainRoutes: FC = (): JSX.Element => {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/prices" element={<PricePage />}></Route>
        <Route path="/batches" element={<BatchesPage />}></Route>
        <Route path="/contact" element={<ConactPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};
export default MainRoutes;
