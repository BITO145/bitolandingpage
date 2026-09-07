import { useState, useEffect } from "react";

function Navigation() {
  const handleNav = (e) => {
    e.preventDefault();
    window.location.href = "https://www.bitoindustriesassociation.com";
  };

  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getHeaderStyle = () => ({
    width: '100%',
    maxWidth: '90rem',
    paddingLeft: viewportWidth >= 1280 ? '6rem' : viewportWidth >= 768 ? '4rem' : viewportWidth >= 640 ? '2rem' : '1rem',
    paddingRight: viewportWidth >= 1280 ? '6rem' : viewportWidth >= 768 ? '4rem' : viewportWidth >= 640 ? '2rem' : '1rem',
    background: 'rgba(255,255,255,0.95)',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    minHeight: '5rem',
    transition: 'box-shadow 0.2s',
  });

  return (
    <header
      className="flex justify-between items-center mx-auto relative"
      style={getHeaderStyle()}
    >
      {/* Logo */}
      <nav className="flex items-center">
        <a href="/" aria-label="BITO Home">
          <img
            src="/dark logo.png"
            alt="BITO Industries Association Logo"
            className="object-contain h-16 sm:h-20 transition-transform hover:scale-105"
            style={{ maxWidth: '220px' }}
          />
        </a>
      </nav>
      {/* Visit Main Site Button */}
      <div>
        <button
          onClick={handleNav}
          className="px-5 py-2 rounded-full font-semibold text-white bg-[#b27f49] hover:bg-[#a06e3c] shadow transition-colors"
          style={{ fontSize: '1rem', letterSpacing: '0.02em' }}
        >
          Visit Main Site
        </button>
      </div>
    </header>
  );
}

export default Navigation;
