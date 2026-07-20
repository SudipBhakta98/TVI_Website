import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage"; // Adjust the path if you saved it elsewhere
import About from "./pages/AboutPage";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  );
};

export default App;