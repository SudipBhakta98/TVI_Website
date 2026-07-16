import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "HOME", to: "hero" },
  { name: "INDUSTRIES", to: "industries" },
  { name: "CAPABILITIES", to: "capabilities" },
  { name: "PRODUCTS", to: "products" },
  { name: "OUR FACILITY", to: "facility" },
  { name: "QUALITY", to: "quality" },
  { name: "ABOUT US", to: "about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // 1. Sync Active Nav Item with Route Location & Clean Up Hash Issues
  useEffect(() => {
    if (location.pathname === "/contact") {
      // Clear active highlights when on the contact page
      setActiveItem("");
    } else if (isHomePage && !location.hash) {
      // Default to Home if on root homepage without a hash
      setActiveItem("HOME");
    }
  }, [location, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (targetId, itemName) => {
    setOpen(false);
    setActiveItem(itemName);
    
    if (!isHomePage) {
      navigate(`/#${targetId}`);
    } else {
      // Clean up the URL: replace hash state smoothly without forcing page reload
      window.history.pushState(null, "", `/#${targetId}`);
    }
  };

  const NavItemLink = ({ item, mobile = false }) => {
    const isCurrentlyActive = activeItem === item.name;
    const activeClass = isCurrentlyActive ? "text-[#0082FB]" : "text-gray-300 hover:text-white";
    const baseClass = mobile 
      ? `text-sm font-semibold tracking-wide cursor-pointer py-2 border-b border-gray-900 block transition-colors ${activeClass}`
      : `cursor-pointer text-xs font-semibold tracking-wider transition-colors duration-200 ${activeClass}`;

    if (isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={700}
          offset={-80}
          spy={true}
          // Dynamically sync hash to URL as you scroll
          onSetActive={() => {
            setActiveItem(item.name);
            window.history.replaceState(null, "", `/#${item.to}`);
          }}
          onClick={() => {
            setOpen(false);
            window.history.pushState(null, "", `/#${item.to}`);
          }}
          className={baseClass}
        >
          {item.name}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={`/#${item.to}`}
        onClick={() => handleNavClick(item.to, item.name)}
        className={baseClass}
      >
        {item.name}
      </RouterLink>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll
            ? "bg-[#031424]/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-800"
            : "bg-gradient-to-b from-[#031424]/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 lg:px-8 flex justify-between items-center">

          {/* Logo Area */}
          <RouterLink 
            to="/" 
            onClick={() => handleNavClick("hero", "HOME")} 
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

                  {/* Active bottom border indicator */}
                  {activeItem === item.name && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0082FB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <RouterLink to="/contact" onClick={() => setActiveItem("")}>
              <button className={`transition-colors px-5 py-2.5 rounded text-white font-bold text-xs tracking-wider uppercase cursor-pointer shadow-md ${
                location.pathname === "/contact" 
                  ? "bg-[#0072de] ring-2 ring-[#0082FB]" 
                  : "bg-[#0082FB] hover:bg-[#0072de]"
              }`}>
                CONTACT US
              </button>
            </RouterLink>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="xl:hidden text-white text-3xl cursor-pointer focus:outline-none z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-72 h-screen bg-[#031424] z-40 shadow-2xl xl:hidden border-l border-gray-800"
          >
            <div className="pt-24 px-6 flex flex-col gap-4 overflow-y-auto h-full pb-10">
              {navItems.map((item) => (
                <NavItemLink key={item.name} item={item} mobile={true} />
              ))}

              <RouterLink to="/contact" onClick={() => { setOpen(false); setActiveItem(""); }}>
                <button className="w-full mt-4 bg-[#0082FB] py-3 rounded text-white font-bold text-xs tracking-wider uppercase cursor-pointer shadow-md">
                  CONTACT US
                </button>
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}