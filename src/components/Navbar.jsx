import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { root_image} from "../../image/image"; 
import industriesAssets from "../assets/industriesAssets.js"

const navItems = [
  { name: "HOME", to: "/" },
  { name: "INDUSTRIES WE SERVE", to: "/serviceIndustries", dropdown: industriesAssets },
  { name: "CAPABILITIES", to: "/capabilities" },
  { name: "PRODUCTS", to: "/products" },
  { name: "OUR FACILITY", to: "/facilities" },
  { name: "QUALITY", to: "/quality" },
  { name: "ABOUT", to: "/about" },
];

// Extracted reusable Dropdown Component (Uses inline SVG icons)
function NavDropdown({ item, isMobile, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={isMobile ? "border-b border-slate-800/80" : "relative group py-5"}>
      <div className={`flex items-center justify-between ${isMobile ? "py-3" : ""}`}>
        <Link
          to={item.to}
          onClick={onClose}
          className={`text-xs font-bold tracking-wider transition-colors inline-flex items-center gap-1 ${
            location.pathname.startsWith(item.to) ? "text-[#4F9B28]" : "text-slate-300 group-hover:text-[#4F9B28]"
          }`}
        >
          <span>{item.name}</span>
          {!isMobile && (
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </Link>
        {isMobile && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-slate-400 hover:text-white" aria-label="Toggle Dropdown">
            <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        )}
      </div>

      {/* Dynamic Dropdown List */}
      <div
        className={
          isMobile
            ? `${isOpen ? "block" : "hidden"} pl-3 pb-2 flex flex-col gap-2 border-l border-slate-800 my-1`
            : "absolute top-full left-0 w-64 bg-[#12161A] border border-slate-800 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
        }
      >
        {Object.entries(item.dropdown).map(([key, value]) => (
          <Link
            key={key}
            to={`/serviceIndustries/${key}`}
            onClick={onClose}
            className={`block px-4 py-2 text-[11px] font-bold tracking-wider transition-colors ${
              location.pathname === `/industries/${key}`
                ? "text-[#4F9B28] bg-slate-800/50"
                : "text-slate-400 hover:text-[#4F9B28] hover:bg-slate-800/30"
            }`}
          >
            {value.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  // Unified link renderer
  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) =>
      item.dropdown ? (
        <NavDropdown key={item.name} item={item} isMobile={isMobile} onClose={() => setOpen(false)} />
      ) : (
        <Link
          key={item.name}
          to={item.to}
          onClick={() => setOpen(false)}
          className={`text-xs font-bold tracking-wider transition-colors ${
            isMobile ? "py-3 border-b border-slate-800/80 flex items-center justify-between" : "relative py-2"
          } ${location.pathname === item.to ? "text-[#4F9B28]" : "text-slate-300 hover:text-[#4F9B28]"}`}
        >
          <span>{item.name}</span>
          {isMobile && location.pathname === item.to && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F9B28]" />
          )}
        </Link>
      )
    );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12161A]/95 backdrop-blur-md border-b border-slate-800 shadow-md">
        <div className="max-w-[90rem] mx-auto h-16 px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <img src={root_image.logo} alt="Logo" className="h-9 w-auto brightness-110" />
            <div className="text-white border-l border-slate-700/80 pl-3">
              <h1 className="font-black text-base uppercase leading-none">TECHNOVISION</h1>
              <p className="text-[10px] text-[#4F9B28] font-bold tracking-widest mt-1">INDUSTRIES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-6">{renderNavLinks(false)}</div>
            <Link to="/contact">
              <button className="px-5 py-2.5 rounded-lg text-white font-extrabold text-xs uppercase bg-[#E31B23] hover:bg-lime-600 transition-all cursor-pointer">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile Toggle Button with Inline SVGs */}
          <button onClick={() => setOpen(!open)} className="xl:hidden text-white p-2 focus:outline-none" aria-label="Toggle Menu">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {open && <div className="fixed inset-0 bg-black/60 z-40 xl:hidden" onClick={() => setOpen(false)} />}
      
      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-[#12161A] z-50 border-l border-slate-800 pt-20 px-6 pb-10 transition-transform duration-300 xl:hidden flex flex-col justify-between overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1">{renderNavLinks(true)}</div>
        <div className="pt-6">
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-red-600 hover:bg-lime-600 py-3.5 rounded-lg text-white font-extrabold text-xs uppercase shadow-md transition-all cursor-pointer">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}