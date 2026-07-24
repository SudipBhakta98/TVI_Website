import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage"; // Adjust the path if you saved it elsewhere
import About from "./pages/AboutPage";
import Capabilities from "./pages/CapabilitiesPage";
import Facilities from "./pages/FacilityPage";
import Products from "./pages/ProductPage";
import Industries from "./pages/ServicesPage";
import Quality from "./pages/QualityPage";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>    
        <Route path="/*" element={<HomePage />} />
         <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/capabilities" element={<Capabilities/>}/>
        <Route path="/Facilities" element={<Facilities/>}/>
        <Route path="/products" element ={<Products/>}/>
        <Route path="/industries" element ={<Industries/>}/>
        <Route path="/quality" element ={<Quality/>}/>
      </Route>
    </Routes>
  );
};

export default App;