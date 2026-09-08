/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logos/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Join Now (/join-now) page has a light hero background, so navbar
  // links need to be dark there to stay visible. Other pages keep white.
  const isLightHero = location.pathname === "/join-now";
  const navLinkClass = isLightHero ? "text-dark" : "text-white";

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleClose();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar
        style={{ zIndex: '1030' }}
        className="p-4 d-flex justify-content-center align-items-center"
        expand="lg"
      >
        <Container className="d-none d-lg-flex">
          {/* Left Nav Links (Desktop Only) */}
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link as={Link} to="/" className={navLinkClass}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={navLinkClass}>About</Nav.Link>
            <Nav.Link as={Link} to="/our-work" className={navLinkClass}>Our Work</Nav.Link>
                 <Nav.Link as={Link} to="/events" className={navLinkClass}>Events</Nav.Link>
                  <Nav.Link as={Link} to="/Tradepage" className={navLinkClass}>Global Trade</Nav.Link>
            {/* <Nav.Link onClick={scrollToThirtyPercent} className={navLinkClass}>Leadership</Nav.Link> */}
            {/* <Nav.Link href="https://bitoworld.in/bsic/" className={navLinkClass}>BSIC</Nav.Link> */}
          </Nav>

          {/* Logo in the Middle */}
          <Link to="/">
            <Navbar.Brand className="mx-auto">
              <img
                style={{ maxWidth: "70%" }}
                src={Logo}
                alt="Logo"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>

          {/* Right Nav Links (Desktop Only) */}
          <Nav className="ms-auto d-none d-lg-flex align-items-center">
       
            {/* <Nav.Link as={Link} to="/appointment" className={navLinkClass}>Book Appointment</Nav.Link> */}
           
          
            <Nav.Link as={Link} to="/bia" className={navLinkClass}>BIA</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className={navLinkClass}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/membership" className={navLinkClass}>Membership</Nav.Link>
            <Link
              to="/join-now"
              style={{
                marginLeft: '18px',
                padding: '8px 22px',
                background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
                color: '#222',
                borderRadius: '30px',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: 'none',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                letterSpacing: '0.5px',
                display: 'inline-block',
              }}
              className="join-now-btn"
            >
              Join Now
            </Link>
          </Nav>
        </Container>

        {/* Mobile View: Logo on the Left and Toggle Button on the Right */}
        <div className="d-flex d-lg-none w-100 justify-content-between align-items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
          </Link>
          <GiHamburgerMenu size={30} onClick={handleShow} style={{ cursor: 'pointer', color: isLightHero ? '#222' : 'white' }} />
        </div>
      </Navbar>

      {/* Offcanvas Drawer (Mobile Only) */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BITO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="text-dark" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/our-work" className="text-dark" onClick={handleClose}>
              Our Work
            </Nav.Link>
           <Nav.Link as={Link} to="/Tradepage" className="text-dark" onClick={handleClose}>
              Global Trade
            </Nav.Link>
           
            <Nav.Link as={Link} to="/events" className="text-dark" onClick={handleClose}>
              Events
            </Nav.Link>

           <Nav.Link as={Link} to="/bia"  className="text-dark" onClick={handleClose}>BIA    </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="text-dark" onClick={handleClose}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/membership" className="text-dark" onClick={handleClose}>
              Membership
            </Nav.Link>
            <Link
              to="/join-now"
              style={{
                margin: '18px 0 0 0',
                padding: '10px 0',
                background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
                color: '#222',
                borderRadius: '30px',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: 'none',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                letterSpacing: '0.5px',
                textAlign: 'center',
                display: 'block',
              }}
              className="join-now-btn"
              onClick={handleClose}
            >
              Join Now
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
