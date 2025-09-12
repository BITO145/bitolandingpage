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
  });

  return (
    <header className="py-6 flex justify-center items-center mx-auto relative z-50" style={getHeaderStyle()}>
      {/* Centered Logo */}
      <nav className="flex items-center justify-center">
        <a href="/" aria-label="BITO Home">
          <img
            src="/dark logo.png"
            alt="BITO Industries Association Logo"
            className="object-contain h-40"
          />
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
