import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Relics from "../pages/Relics";
import Vaults from "../pages/Vaults";
import Tokens from "../pages/Tokens";
import Paths from "../pages/Paths";
import Videos from "../pages/Videos";
import Photos from "../pages/Photos";

const PublicRoutes = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/relics" element={<Relics />} />
          <Route path="/vaults" element={<Vaults />} />
          <Route path="/token" element={<Tokens />} />
          <Route path="/path" element={<Paths />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default PublicRoutes;
