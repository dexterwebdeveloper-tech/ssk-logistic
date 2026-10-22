

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };


  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };



  const isActive = (path) => {
    return location.pathname === path ? "active-nav" : "";
  };

    const closeNav = () => {
    setIsNavOpen(false);
  };
  
    useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <header>
      {/* Top Header */}
      <div className="header-top bgg-darkk py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">

            <div className="d-flex align-items-center flex-wrap">
              <a
                href="tel:+918956581790"
                className="text-white me-4 text-decoration-none fw-bold"
              >
                <i className="fas fa-phone-volume me-2"></i>
                +91 8956581790
              </a>

              <a
                href="mailto:info@ssklogistics.in"
                className="text-white text-decoration-none fw-bold"
              >
                <i className="far fa-envelope me-2"></i>
                info@ssklogistics.in
              </a>
            </div>

            <div>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#" className="text-white me-3">
                <i className="fab fa-youtube"></i>
              </a>

              <a href="#" className="text-white">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

          </div>
        </Container>
      </div>

      {/* Navbar */}
      <Navbar
        expand="lg"
        bg="white"
        sticky="top"
        expanded={expanded}
        className="shadow-sm"
      >
        <Container>

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
            <img
              src="/images/logo.jpg"
              alt="SSK Logistics"
              className="logoo"
            />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="main-navbar"
          >
            <i className="fas fa-bars"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-lg-center">

              <Nav.Link
                as={Link}
                to="/"
                className={`fw-bold ${isActive("/")}`}
                onClick={closeMenu}
              >
                Home
              </Nav.Link>


  <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>

                  <NavDropdown.Item as={Link} to="/about-us" onClick={closeNav}>
                    About Us
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/term-condition" onClick={closeNav}>
                    Term & Condition
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/privacy-policy" onClick={closeNav}>
                    Privacy Policy
                  </NavDropdown.Item>

                </NavDropdown>

            

              <Nav.Link
                as={Link}
                to="/services"
                className={`fw-bold ${isActive("/services")}`}
                onClick={closeMenu}
              >
                Services
              </Nav.Link>


                <Nav.Link
                as={Link}
                to="/Industries-Served"
                className={`fw-bold ${isActive("/services")}`}
                onClick={closeMenu}
              >
                Industries Served
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/expertise"
                className={`fw-bold ${isActive("/expertise")}`}
                onClick={closeMenu}
              >
                Expertise
              </Nav.Link>

<Nav.Link
                as={Link}
                to="/gallery"
                className={`fw-bold ${isActive("/gallery")}`}
                onClick={closeMenu}
              >
                Gallery
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/clients"
                className={`fw-bold ${isActive("/clients")}`}
                onClick={closeMenu}
              >
                Clients
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/career"
                className={`fw-bold ${isActive("/testimonials")}`}
                onClick={closeMenu}
              >
                Career
              </Nav.Link>

 <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>

                  <NavDropdown.Item as={Link} to="/contact-us" onClick={closeNav}>
                    Contact Us
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/enquiry" onClick={closeNav}>
                    Enquiry
                  </NavDropdown.Item>

                </NavDropdown>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
