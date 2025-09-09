/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar
        style={{ zIndex: '9' }}
        className="p-4 d-flex justify-content-center align-items-center"
        expand="lg"
      >
        <Container className="d-none d-lg-flex">
          {/* Left Nav Links (Desktop Only) */}
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
            <Nav.Link as={Link} to="/our-work" className="text-white">Our Work</Nav.Link>
            {/* <Nav.Link onClick={scrollToThirtyPercent} className="text-white">Leadership</Nav.Link> */}
            {/* <Nav.Link href="https://bitoworld.in/bsic/" className="text-white">BSIC</Nav.Link> */}
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
            <Nav.Link as={Link} to="/events" className="text-white">Events</Nav.Link>
            <Nav.Link as={Link} to="/appointment" className="text-white">Book Appointment</Nav.Link>
            {/* <Nav.Link href="#media" className="text-white">Media</Nav.Link> */}
            <Nav.Link href="https://www.bitojobs.com/" target="_blank" rel="noopener noreferrer" className="text-white">BITO Jobs</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="text-white">Contact</Nav.Link>
            <Nav.Link as={Link} to="/membership" className="text-white">Membership</Nav.Link>
            <a
              // href="https://www.join.bitoindustriesassociation.com/"
              href="/join-now"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          </Nav>
        </Container>

        {/* Mobile View: Logo on the Left and Toggle Button on the Right */}
        <div className="d-flex d-lg-none w-100 justify-content-between align-items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
          </Link>
          <GiHamburgerMenu size={30} onClick={handleShow} style={{ cursor: 'pointer', color: 'white' }} />
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
            <Nav.Link href="https://bitoworld.in/about" className="text-dark" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link href="https://bitoworld.in/history" className="text-dark" onClick={handleClose}>
              Our Work
            </Nav.Link>
            {/* <Nav.Link href="#leadership" className="text-dark" onClick={handleClose}>
              Leadership
            </Nav.Link> */}
            <Nav.Link as={Link} to="/events" className="text-dark" onClick={handleClose}>
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/appointment" className="text-dark" onClick={handleClose}>
              Book Appointment
            </Nav.Link>
            {/* <Nav.Link href="#media" className="text-dark" onClick={handleClose}>
              Media
            </Nav.Link> */}
            <Nav.Link href="https://www.bitojobs.com/" target="_blank" rel="noopener noreferrer" className="text-dark" onClick={handleClose}>
              BITO Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="text-dark" onClick={handleClose}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/membership" className="text-dark" onClick={handleClose}>
              Membership
            </Nav.Link>
            <a
              // href="https://www.join.bitoindustriesassociation.com/"
              href="/join-now"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
