import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiChevronDown,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";
import { root_image } from "../../image/image";
import industriesAssets from "../assets/industriesAssets.js";
import productAssets from "../assets/productAssets.js";
import { capabilitiesGrid } from "../assets/capabilitiesAssets.js";

// Nav items configuration
const navItems = [
  { name: "HOME", to: "/" },

  {
    name: "INDUSTRIES WE SERVE",
    to: "/serviceIndustries",
    dropdown: industriesAssets,
    basePath: "/serviceIndustries",
  },

  {
    name: "CAPABILITIES",
    to: "/capabilities",
    dropdown: capabilitiesGrid,
    basePath: "/capabilities",
  },

  {
    name: "PRODUCTS",
    to: "/products",
    dropdown: productAssets,
    basePath: "/products",
  },

  { name: "OUR FACILITY", to: "/facilities" },
  { name: "QUALITY", to: "/quality" },
  { name: "ABOUT", to: "/about" },
  { name: "POLICIES", to: "/policies" },
];

// Reusable Dropdown Component
function NavDropdown({ item, isMobile, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const dropdownList = Array.isArray(item.dropdown)
    ? item.dropdown.map((prod) => ({
        id: prod.id,
        name: prod.name || prod.title,
      }))
    : Object.entries(item.dropdown).map(([key, val]) => ({
        id: key,
        name: val.name || val.title,
      }));

  const isParentActive =
    location.pathname === item.to ||
    (item.basePath && location.pathname.startsWith(item.basePath + "/"));

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClose();
  };

  return (
    <div
      className={
        isMobile
          ? `border-b border-slate-800/80 ${isParentActive ? "bg-slate-800/50" : ""}`
          : "relative group py-2 my-auto"
      }
    >
      {/* Parent Link */}
      <div
        className={`flex items-center justify-between ${
          isMobile ? "py-3 px-3" : "px-3"
        }`}
      >
        <Link
          to={item.to}
          onClick={handleLinkClick}
          className={`text-xs font-bold tracking-wider transition-colors inline-flex items-center gap-1 w-full relative pb-1 ${
            isParentActive
              ? "text-lime-600 font-extrabold"
              : isMobile
              ? "text-slate-200 hover:text-lime-600"
              : "text-slate-800 group-hover:text-lime-600"
          }`}
        >
          <span>{item.name}</span>

          {!isMobile && (
            <HiChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ml-auto ${
                isParentActive ? "text-lime-600" : "text-slate-500 group-hover:text-lime-600"
              }`}
            />
          )}

          {/* Desktop Bottom Green Line */}
          {!isMobile && isParentActive && (
            <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-lime-600 rounded-full" />
          )}
        </Link>

        {/* Mobile Dropdown Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1 transition-colors ml-2 ${
              isParentActive ? "text-lime-600" : "text-slate-400 hover:text-white"
            }`}
            aria-label="Toggle Dropdown"
          >
            <HiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Dropdown List */}
      <div
        className={
          isMobile
            ? `${
                isOpen ? "block" : "hidden"
              } pl-6 pb-2 flex flex-col border-l border-slate-700/80 my-1`
            : "absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-[70vh] overflow-y-auto"
        }
      >
        {dropdownList.map((dropItem) => {
          const targetUrl = `${item.basePath}/${dropItem.id}`;
          const isActive = location.pathname === targetUrl;

          return (
            <Link
              key={dropItem.id}
              to={targetUrl}
              onClick={handleLinkClick}
              className={`block px-4 py-2.5 text-[11px] font-bold tracking-wider transition-colors ${
                isMobile
                  ? isActive
                    ? "border-b border-slate-800/60 last:border-none text-lime-600 bg-slate-800/80 font-extrabold"
                    : "border-b border-slate-800/60 last:border-none text-slate-300 hover:text-white hover:bg-slate-800/60"
                  : isActive
                  ? "border-b border-slate-300 last:border-none text-lime-600 bg-lime-50/80"
                  : "border-b border-slate-300 last:border-none text-slate-700 hover:text-lime-600 hover:bg-slate-50"
              }`}
            >
              {dropItem.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isContactActive = location.pathname === "/contact";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => {
      const isExactActive = location.pathname === item.to;

      return item.dropdown ? (
        <NavDropdown
          key={item.name}
          item={item}
          isMobile={isMobile}
          onClose={() => setOpen(false)}
        />
      ) : (
        <div
          key={item.name}
          className={
            isMobile
              ? `border-b border-slate-800/80 ${isExactActive ? "bg-slate-800/50" : ""}`
              : "py-2 my-auto px-3"
          }
        >
          <Link
            to={item.to}
            onClick={handleLinkClick}
            className={`text-xs font-bold tracking-wider transition-colors inline-flex items-center w-full relative pb-1 ${
              isMobile ? "py-3 px-3 flex items-center justify-between" : ""
            } ${
              isExactActive
                ? "text-lime-600 font-extrabold"
                : isMobile
                ? "text-slate-200 hover:text-lime-600"
                : "text-slate-800 hover:text-lime-600"
            }`}
          >
            <span>{item.name}</span>

            {isMobile && isExactActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-lime-600 ml-2" />
            )}

            {/* Desktop Bottom Green Line */}
            {!isMobile && isExactActive && (
              <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-lime-600 rounded-full" />
            )}
          </Link>
        </div>
      );
    });

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[90rem] mx-auto h-16 px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3"
          >
            <img
              src={root_image.logo}
              alt="Logo"
              className="h-9 w-auto"
            />

            <div className="text-lime-600 border-l border-slate-300 pl-3">
              <h1 className="font-black text-base uppercase leading-none text-lime-600">
                TECHNOVISION
              </h1>

              <p className="text-[10px] text-slate-900 font-bold tracking-widest mt-0.5">
                INDUSTRIES
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {renderNavLinks(false)}
            </div>

            <div className="relative py-2">
              <Link to="/contact" onClick={handleLinkClick}>
                <button
                  className={`px-5 py-2.5 rounded-lg text-white font-extrabold text-xs uppercase transition-all cursor-pointer shadow-sm ${
                    isContactActive
                      ? "bg-lime-600 hover:bg-lime-700"
                      : "bg-[#E31B23] hover:bg-red-700"
                  }`}
                >
                  CONTACT US
                </button>
              </Link>
              {/* Green Line Below Contact Button */}
              {isContactActive && (
                <span className="absolute bottom-[-6px] left-0 right-0 h-1 bg-lime-600 rounded-full" />
              )}
            </div>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-slate-800 hover:text-lime-600 p-2 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 xl:hidden transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-dvh bg-[#12161A] z-50 border-l border-slate-800 transition-transform duration-300 xl:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Scrollable Links Section */}
        <div className="flex-1 overflow-y-auto pt-20 px-6 pb-4 flex flex-col gap-1">
          {renderNavLinks(true)}
        </div>

        {/* Sticky Bottom Contact Us */}
        <div className="p-6 border-t border-slate-800/80 bg-[#12161A] sticky bottom-0 relative">
          <Link
            to="/contact"
            onClick={handleLinkClick}
          >
            <button
              className={`w-full py-3 rounded-lg text-white font-extrabold text-xs uppercase shadow-md transition-all cursor-pointer ${
                isContactActive
                  ? "bg-lime-600 hover:bg-lime-700"
                  : "bg-[#E31B23] hover:bg-red-700"
              }`}
            >
              CONTACT US
            </button>
          </Link>
          {isContactActive && (
            <span className="absolute bottom-2 left-6 right-6 h-1 bg-lime-600 rounded-full" />
          )}
        </div>
      </div>
    </>
  );
}