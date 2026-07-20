import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "HOME", to: "hero", type: "scroll" },
  { name: "INDUSTRIES", to: "industries", type: "scroll" },
  { name: "CAPABILITIES", to: "capabilities", type: "scroll" },
  { name: "PRODUCTS", to: "products", type: "scroll" },
  { name: "OUR FACILITY", to: "facility", type: "scroll" },
  { name: "QUALITY", to: "quality", type: "scroll" },
  { name: "ABOUT", to: "/about", type: "route" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Sync Active highlights dynamically when the URL location transitions across sub-routes
  useEffect(() => {
    if (location.pathname === "/contact") {
      setActiveItem("");
    } else if (location.pathname === "/about") {
      setActiveItem("ABOUT");
    } else if (isHomePage && !location.hash) {
      setActiveItem("HOME");
    }
  }, [location, isHomePage]);

  // Clean navigation workflow avoiding history stack alteration hacks
  const handleNavClick = (item) => {
    setOpen(false);
    setActiveItem(item.name);
    
    if (item.type === "route") {
      navigate(item.to);
    } else if (!isHomePage) {
      // Direct sub-page visitors back to home route with target section hash appended cleanly
      navigate(`/#${item.to}`);
    }
  };

  const NavItemLink = ({ item, mobile = false }) => {
    const isCurrentlyActive = activeItem === item.name;
    const activeClass = isCurrentlyActive ? "text-[#0082FB]" : "text-gray-300 hover:text-white";
    const baseClass = mobile 
      ? `text-sm font-semibold tracking-wide cursor-pointer py-2 border-b border-gray-900 block transition-colors ${activeClass}`
      : `cursor-pointer text-xs font-semibold tracking-wider transition-colors duration-200 ${activeClass}`;

    // Condition 1: Direct route matching link
    if (item.type === "route") {
      return (
        <RouterLink to={item.to} onClick={() => handleNavClick(item)} className={baseClass}>
          {item.name}
        </RouterLink>
      );
    }

    // Condition 2: High-speed local viewport scroll if user is browsing homepage bounds
    if (isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={700}
          offset={-80}
          spy={true}
          onSetActive={() => setActiveItem(item.name)}
          onClick={() => setOpen(false)}
          className={baseClass}
        >
          {item.name}
        </ScrollLink>
      );
    }

    // Condition 3: Unified button router to home anchor sections from deep routes
    return (
      <button
        onClick={() => handleNavClick(item)}
        className={`${baseClass} bg-transparent border-none text-left p-0 w-full focus:outline-none`}
      >
        {item.name}
      </button>
    );
  };

  return (
    <>
      {/* Solid, stable wrapper layer layout */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#031424] shadow-lg py-4 border-b border-gray-800 transition-all duration-300">
        <div className="max-w-[90rem] mx-auto px-4 lg:px-8 flex justify-between items-center">

          {/* Logo Area */}
          <RouterLink 
            to="/" 
            onClick={() => handleNavClick({ name: "HOME", to: "hero", type: "scroll" })} 
            className="flex items-center gap-3 select-none cursor-pointer"
          >
            <img 
              src="/image/logo.png" 
              alt="Technovision Logo" 
              className="h-9 w-auto object-contain"
            />
            <div className="text-white border-l border-gray-700 pl-3">
              <h2 className="font-bold text-lg tracking-wider leading-none">
                TECHNOVISION
              </h2>
              <p className="text-sm text-white tracking-[3px] mt-1 uppercase">
                INDUSTRIES
              </p>
            </div>
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navItems.map((item) => (
                <div key={item.name} className="relative py-2">
                  <NavItemLink item={item} />

                  {/* Clean native dynamic active horizontal anchor bar */}
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0082FB]" />
                  )}
                </div>
              ))}
            </div>

            {/* Contact Route Trigger */}
            <RouterLink to="/contact" onClick={() => setActiveItem("")}>
              <button className={`transition-all px-5 py-2.5 rounded text-white font-bold text-xs tracking-wider uppercase cursor-pointer shadow-md ${
                location.pathname === "/contact" 
                  ? "bg-[#0072de] ring-2 ring-[#0082FB]" 
                  : "bg-[#0082FB] hover:bg-[#0072de]"
              }`}>
                CONTACT US
              </button>
            </RouterLink>
          </div>

          {/* Mobile Menu Action Toggle Button (Using lightweight text string characters) */}
          <button
            className="xl:hidden text-white text-2xl font-bold cursor-pointer focus:outline-none z-50 px-2 select-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Navigation (Pure standard CSS translate properties) */}
      <div
        className={`fixed top-0 right-0 w-72 h-screen bg-[#031424] z-40 shadow-2xl xl:hidden border-l border-gray-800 pt-24 px-6 flex flex-col gap-4 overflow-y-auto pb-10 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <NavItemLink key={item.name} item={item} mobile={true} />
        ))}

        <RouterLink to="/contact" onClick={() => { setOpen(false); setActiveItem(""); }}>
          <button className="w-full mt-4 bg-[#0082FB] py-3 rounded text-white font-bold text-xs tracking-wider uppercase cursor-pointer shadow-md">
            CONTACT US
          </button>
        </RouterLink>
      </div>
    </>
  );
}