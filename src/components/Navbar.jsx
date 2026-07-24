import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { root_image } from "../../image/image";

const navItems = [
  { name: "HOME", to: "/" },
  { name: "INDUSTRIES", to: "/industries" },
  { name: "CAPABILITIES", to: "/capabilities" },
  { name: "OUR SOLUTIONS", to: "/products" },
  { name: "OUR FACILITY", to: "/facilities" },
  { name: "QUALITY", to: "/quality" },
  { name: "ABOUT", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#031424] border-b border-gray-800 shadow-lg">
        <div className="max-w-[90rem] mx-auto h-15 px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src={root_image.logo}
              alt="Technovision Logo"
              className="h-9 w-auto"
            />

            <div className="text-white border-l border-gray-700 pl-3">
              <h2 className="font-bold text-lg tracking-wider leading-none">
                TECHNOVISION
              </h2>
              <p className="text-sm tracking-[3px] mt-1 uppercase">
                INDUSTRIES
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navItems.map((item) => {
                const active = location.pathname === item.to;

                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`relative py-2 text-xs font-semibold tracking-wider transition-colors ${
                      active
                        ? "text-[#0082FB]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {active && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#0082FB]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link to="/contact">
              <button
                className={`px-5 py-2.5 rounded text-white font-bold text-xs tracking-wider uppercase transition ${
                  location.pathname === "/contact"
                    ? "bg-[#0072de] ring-2 ring-[#0082FB]"
                    : "bg-[#0082FB] hover:bg-[#0072de]"
                }`}
              >
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-white text-2xl px-2"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-screen bg-[#031424] z-40 border-l border-gray-800 pt-24 px-6 pb-10 transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const active = location.pathname === item.to;

            return (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`py-2 border-b border-gray-900 text-sm font-semibold tracking-wide ${
                  active
                    ? "text-[#0082FB]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full mt-4 bg-[#0082FB] py-3 rounded text-white font-bold text-xs tracking-wider uppercase">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}