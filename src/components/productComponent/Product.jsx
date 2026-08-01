import React, { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import productAssets from "../../assets/productAssets.js";
import SEO from "../SEO.jsx";


const productSeo = {
  "data-center-racks": {
    title: "Data Center Rack Manufacturer | Server Enclosures | Technovision",
    description: "Precision-manufactured data center racks and server enclosures, build-to-print for OEM infrastructure requirements.",
  },
  "charging-station": {
    title: "EV Charging Enclosure Manufacturer | Technovision",
    description: "Precision-manufactured EV charging enclosures built to OEM drawings, combining structural strength and dimensional accuracy.",
  },
  console: {
    title: "Control Desk & Console Manufacturer | Technovision",
    description: "Custom control desks and consoles manufactured to OEM specifications for industrial and automation applications.",
  },
  "integrated-cabinets": {
    title: "Integrated Electrical Enclosure Manufacturer | Technovision",
    description: "Integrated electrical enclosures and cabinets built to print for power and control system OEMs.",
  },
  "lab-equipment": {
    title: "Lab Equipment Frame Manufacturer | Technovision",
    description: "Precision laboratory and diagnostic equipment frames manufactured to strict dimensional and finish standards.",
  },
  "battery-casing": {
    title: "Battery Enclosure Manufacturer | Energy Storage | Technovision",
    description: "Battery enclosures and energy storage casings manufactured for EV and industrial power applications.",
  },
  "sheet-metal": {
    title: "Custom Sheet Metal Parts Manufacturer | Technovision",
    description: "Custom build-to-print sheet metal parts and assemblies manufactured to OEM CAD models and drawings.",
  },
};

export default function Product() {
 
  const { productId } = useParams();

  // 2. Find matching product object by ID
  const product = productId
    ? productAssets.find((item) => item.id === productId)
    : null;
const seo = productSeo[productId];
  // 3. Redirect to main page if product is not found
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Extract images object values into an array for gallery display
  const imageList = product.images ? Object.values(product.images) : [];
  
  // Track selected image for the gallery preview
  const [selectedImage, setSelectedImage] = useState(
    imageList.length > 0 ? imageList[0] : ""
  );

  // FIX: Reset selectedImage whenever productId changes
  useEffect(() => {
    setSelectedImage(imageList.length > 0 ? imageList[0] : "");
  }, [productId]);

  return (

    <><SEO
        title={seo?.title || `${product.name} | Technovision Industries`}
        description={seo?.description || product.description}
        path={`/products/${productId}`}
      />
    <div className="bg-[#F8FAFC] min-h-screen px-4 lg:px-8 w-full ">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 bg-white rounded-xl shadow-sm border border-slate-200/80 mb-8">
        
        {/* Header Section */}
        <div className="mb-6 border-b border-slate-200 pb-6">
          <span className="text-xl font-black text-[#4F9B28] tracking-widest uppercase px-3 bg-[#4F9B28]/10  py-1 rounded-md inline-block mb-3">
            Precision Engineering
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-2xl font-black text-[#12161A] tracking-wide uppercase">
            {product.name}
          </h1>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">
            {product.description}
          </p>
        </div>

        {/* Image Gallery Section */}
        {imageList.length > 0 && (
          <div className="mb-8">
            {/* Main Active Image */}
            <div className="w-full h-[300px] sm:h-[420px] rounded-lg overflow-hidden shadow-md border border-slate-200 mb-4 bg-slate-50">
              <img
                src={selectedImage || imageList[0]}
                alt={product.name}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>

            {/* Thumbnail Navigation (Visible if more than 1 image) */}
            {imageList.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {imageList.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`h-20 w-24 flex-shrink-0 rounded-md border-2 overflow-hidden transition-all ${
                      (selectedImage || imageList[0]) === imgUrl
                        ? "border-[#4F9B28] ring-2 ring-[#4F9B28]/30"
                        : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Product Details Section */}
        <div className="space-y-8 text-slate-800">
          
          {/* Overview */}
          <div className="bg-[#F8FAFC] p-6 rounded-lg border-l-4 border-[#4F9B28]">
            <h2 className="text-sm font-black text-[#12161A] tracking-wider uppercase mb-2">
              Product Overview
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              {product.overview}
            </p>
          </div>

          {/* Built To Print */}
          {product.builtToPrint && (
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                Build-To-Print Manufacturing
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {product.builtToPrint}
              </p>
            </div>
          )}

          {/* What We Manufacture */}
          {product.whatWeManufacture && product.whatWeManufacture.length > 0 && (
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                What We Manufacture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.whatWeManufacture.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#F8FAFC] p-3 rounded-md border border-slate-200/60">
                    <span className="text-[#4F9B28] font-bold text-xs">✓</span>
                    <span className="text-slate-700 text-sm font-semibold capitalize">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Manufacturing Capabilities & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capabilities */}
            {product.capabilities && (
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h3 className="text-sm font-black text-[#12161A] uppercase tracking-wider mb-3">
                  Key Capabilities
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-700 font-medium">
                  {product.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#E31B23] text-xs">•</span> {cap}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Materials */}
            {product.materials && (
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h3 className="text-sm font-black text-[#12161A] uppercase tracking-wider mb-3">
                  Materials Processed
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-700 font-medium">
                  {product.materials.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#4F9B28] text-xs">•</span> {mat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quality Assurance */}
          {product.quality && (
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                Quality & Precision
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {product.quality}
              </p>
            </div>
          )}

          {/* Finishing & Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Finishing */}
            {product.finishing && (
              <div>
                <h3 className="text-base font-black text-[#12161A] uppercase mb-2">
                  Finishing Options
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.finishing.map((finish, i) => (
                    <span key={i} className="text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-md">
                      {finish}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && (
              <div>
                <h3 className="text-base font-black text-[#12161A] uppercase mb-2">
                  Industry Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span key={i} className="text-xs font-bold bg-[#4F9B28]/10 text-[#4F9B28] border border-[#4F9B28]/20 px-3 py-1.5 rounded-md">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Customization Options */}
          {product.customization && (
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h3 className="text-sm font-black text-[#12161A] uppercase tracking-wider mb-3">
                Customization Options
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-slate-700">
                {product.customization.map((option, i) => (
                  <div key={i} className="bg-white p-2 rounded border border-slate-200 text-center">
                    {option}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Production Capabilities */}
          {product.production && (
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                Production & Scalability
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {product.production}
              </p>
            </div>
          )}

          {/* Why Choose Us */}
          {product.whyChooseUs && (
            <div className="bg-[#12161A] text-white p-6 rounded-lg shadow-md">
              <h2 className="text-sm font-black text-[#4F9B28] tracking-widest uppercase mb-3">
                Why Choose Technovision
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-slate-200">
                {product.whyChooseUs.map((reason, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#4F9B28]">✓</span> {reason}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Call to Action Box */}
          {product.cta && (
            <div className="bg-[#4F9B28]/10 border border-[#4F9B28]/30 p-6 rounded-lg text-center">
              <h3 className="text-base font-black text-[#12161A] uppercase mb-2">
                Request a Custom Quote
              </h3>
              <p className="text-slate-700 text-sm sm:text-base font-medium mb-4">
                {product.cta}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lime-600 hover:bg-lime-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-md transition-colors shadow-sm"
              >
                Submit Your Requirements & Specifications
              </Link>
            </div>
          )}

        </div>
      </article>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 hover:bg-lime-600 bg-red-600 text-white text-xs font-black uppercase px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
        >
          &larr; Back to Previous Page
        </Link>
      </div>
    </div></>
  );
}