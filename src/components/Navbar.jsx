import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { root_image } from "../../image/image";

const navItems = [
  { name: "HOME", to: "/" },
  { name: "INDUSTRIES WE SERVE", to: "/serviceIndustries" },
  { name: "CAPABILITIES", to: "/capabilities" },
  { name: "OUR SOLUTIONS", to: "/products" },
  { name: "OUR FACILITY", to: "/facilities" },
  { name: "QUALITY", to: "/quality" },
  { name: "ABOUT", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Navbar Container - Dark Charcoal (#12161A) with blur backdrop */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12161A]/95 backdrop-blur-md border-b border-slate-800/90 shadow-md select-none">
        <div className="max-w-[90rem] mx-auto h-16 px-4 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <img
              src={root_image.logo}
              alt="Technovision Logo"
              className="h-9 w-auto object-contain brightness-110"
            />

            <div className="text-white border-l border-slate-700/80 pl-3">
              <h1 className="font-black text-base tracking-wider leading-none uppercase">
                TECHNOVISION
              </h1>
              <p className="text-[10px] text-[#4F9B28] tracking-[2.5px] mt-1 uppercase font-bold">
                INDUSTRIES
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => {
                const active = location.pathname === item.to;

                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`relative py-2 text-xs font-bold tracking-wider transition-colors duration-200 ${
                      active
                        ? "text-[#4F9B28]"
                        : "text-slate-300 hover:text-[#4F9B28]"
                    }`}
                  >
                    {item.name}

                    {/* Active State Bottom Indicator Line */}
                    {active && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2.5px] bg-[#4F9B28] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Laser Red CTA Button */}
            <Link to="/contact">
              <button
                className={`px-5 py-2.5 rounded-lg text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md active:scale-95 ${
                  location.pathname === "/contact"
                    ? "bg-[#C8141B] ring-2 ring-[#E31B23]"
                    : "bg-[#E31B23] hover:bg-[#C8141B]"
                }`}
              >
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="xl:hidden text-white text-2xl p-2 focus:outline-none cursor-pointer flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Right Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-screen bg-[#12161A] z-50 border-l border-slate-800 pt-20 px-6 pb-10 transition-transform duration-300 ease-in-out xl:hidden flex flex-col justify-between select-none ${
          open ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 pt-4">
          <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-2">
            Navigation Menu
          </span>
          {navItems.map((item) => {
            const active = location.pathname === item.to;

            return (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`py-3 border-b border-slate-800/80 text-xs font-extrabold tracking-wider transition-colors flex items-center justify-between ${
                  active
                    ? "text-[#4F9B28]"
                    : "text-slate-300 hover:text-[#4F9B28]"
                }`}
              >
                <span>{item.name}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#4F9B28]" />}
              </Link>
            );
          })}
        </div>

        {/* Mobile Action Button */}
        <div className="pt-6">
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#E31B23] hover:bg-[#C8141B] py-3.5 rounded-lg text-white font-extrabold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}