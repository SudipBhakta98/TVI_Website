// components/ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      // Remove the '#' to isolate the exact element ID
      const targetId = hash.replace("#", "");

      // A small 150ms delay gives the DOM enough time to render completely
      const timer = setTimeout(() => {
        scroller.scrollTo(targetId, {
          duration: 700,
          smooth: "easeInOutQuart",
          offset: -80, // Accounts for your navbar height offset
        });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}