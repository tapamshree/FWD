import React from 'react';
import { Outlet } from 'react-router-dom';
import bgImage from '../assets/startup-bg.jpg';  // <-- import here

export default function Layout() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bgImage})`,   // <-- use the imported image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* optional subtle overlay for readability */}
      <div className="absolute inset-0 bg-white/10 -z-10"></div>

      <header>
        {/* Navbar here */}
      </header>

      <main className="relative">
        <Outlet /> {/* All pages will render here */}
      </main>

      <footer>
        {/* Footer here */}
      </footer>
    </div>
  );
}
