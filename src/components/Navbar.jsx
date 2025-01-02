import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { IoMoon, IoSunny } from "react-icons/io5";
import SearchBar from "./SearchBar"; // Import SearchBar component
import "./Navbar.css";

const CustomNavbar = ({ theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <>
      {/* Navbar Component */}
      <Navbar
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
        expanded={expanded}
      >
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="navbar-nav">
            <Navbar.Brand href="/" className="navbar-logo">
              <img
                src="./logo.png"
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="ml-auto navbar-nav">
              <NavDropdown.Item href="/" className="navbar-dropdown-item">
                Home
              </NavDropdown.Item>
              <hr className="release-divider" />
              <NavDropdown.Item href="/TVShow" className="navbar-dropdown-item">
                TV Shows
              </NavDropdown.Item>
              <hr className="release-divider" />
              <NavDropdown.Item
                href="/Netflix"
                className="navbar-dropdown-item"
              >
                Netflix
              </NavDropdown.Item>
              <hr className="release-divider" />
              <NavDropdown.Item
                href="/MovieByRelease"
                className="navbar-dropdown-item"
              >
                Release
              </NavDropdown.Item>
              <hr className="release-divider" />
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/ProfilePage"
                className="navbar-dropdown-item"
              >
                <Image
                  src="./cat.png"
                  roundedCircle
                  alt="Avatar"
                  width="40"
                  height="40"
                />
              </NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
          <div className="judul-website">
            <h5>MovieShowcase</h5>
          </div>

          <div className="navbar-avatar" id="navbar-theme-toggle">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <IoSunny size={24} /> : <IoMoon size={24} />}
            </button>
          </div>
        </Container>
      </Navbar>

      {/* Place SearchBar component here to show below navbar */}
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </>
  );
};

export default CustomNavbar;
