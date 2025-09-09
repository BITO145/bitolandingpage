import { useState } from "react";
import Hamurger from "./Hamurger";

function Navigation() {
  const handleNav = (e) => {
    e.preventDefault();
    window.location.href = "https://www.bitoindustriesassociation.com";
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <header className="w-full px-4 sm:px-8 md:px-16 xl:px-24 py-6 flex justify-between items-center max-w-[90rem] mx-auto relative z-50">
      {/* Left: Logo + Nav Links */}
      <nav className="flex items-center gap-10">
        <a href="/" aria-label="BITO Home">
          <img
            src="/dark logo.png"
            alt="BITO Industries Association Logo"
            className="h-10 object-contain scale-150"
          />
        </a>
      </nav>

      {/* Desktop Auth Buttons */}
      <nav className="hidden lg:flex items-center gap-6">
        <a href="https://www.bitoindustriesassociation.com" onClick={handleNav} className="font-medium text-[#b27f49] xl:text-lg hover:text-[#a3703f] transition-colors duration-150 cursor-pointer">
          Sign in
        </a>
        <button onClick={handleNav} className="bg-[#b27f49] hover:bg-[#a3703f] px-6 py-3 xl:px-8 xl:py-4 rounded-2xl text-white xl:text-lg transition-all duration-200">
          Get Started
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
          className="focus:outline-none"
        >
          <Hamurger />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-60 z-50 flex justify-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col gap-8 [animation:slide-in_0.3s_ease-out]">
            <div className="flex justify-between items-center mb-4">
              <a
                href="/"
                aria-label="BITO Home"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src="/dark logo.png"
                  alt="BITO Industries Association Logo"
                  className="h-10 object-contain scale-150"
                />
              </a>
              <button
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-[#b27f49] hover:text-[#a3703f] focus:outline-none"
              >
                &times;
              </button>
            </div>
            <a href="https://www.bitoindustriesassociation.com" onClick={handleNav} className="font-medium text-[#b27f49] text-lg hover:text-[#a3703f] transition-colors duration-150">
              Sign in
            </a>
            <button onClick={handleNav} className="bg-[#b27f49] hover:bg-[#a3703f] px-6 py-3 rounded-2xl text-white text-lg transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
      <style>
        {`@keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }`}
      </style>
    </header>
  );
}

export default Navigation;
