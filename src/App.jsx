import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Capabilities from "./pages/CapabilitiesPage";
import Facilities from "./pages/FacilityPage";
import ProductsPage from "./pages/ProductPage";
import ServiceIndustries from "./pages/ServiceIndustriesPage";
import IndustryDetail from "./components/industriesComponents/Industry.jsx"; // Update path if needed
import Quality from "./pages/QualityPage";
import Product from "./components/productComponent/Product.jsx";
import CapabilityDetail from "./components/capabilitiesComponent/CapabilityDetail.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import OurPolicies from "./pages/OurPolicies.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>    
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/capabilities/:capabilityId" element={<CapabilityDetail/>} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/serviceIndustries" element={<ServiceIndustries />} />
        <Route path="/serviceIndustries/:industriesKey" element={<IndustryDetail />} />
         <Route path="/products/:productId" element={<Product />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/policies" element={<OurPolicies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;