import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Handle cross-page scrolling after the home page fully mounts
  useEffect(() => {
    if (pathname === '/' && hash) {
      const targetId = hash.replace('#', '');
      
      // A small 150ms timeout gives the home page elements enough time 
      // to render their final layout heights before scrolling begins.
      const timer = setTimeout(() => {
        scroller.scrollTo(targetId, {
          duration: 700,
          smooth: 'easeInOutQuart',
          offset: -80, // Matches your fixed navbar height
        });
      }, 150);

      return () => clearTimeout(timer);
    } else if (!hash) {
      // Reset view to top instantly when jumping between separate routes (like clicking /about)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-15">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}