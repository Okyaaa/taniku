import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/aboutUs/aboutUs";
import Home from "../pages/home/home";
import Komoditi from "../pages/komoditi/komoditi";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="harga-komoditi" element={<Komoditi />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default AppRouter;
