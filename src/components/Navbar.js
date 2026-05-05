import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { FaBlog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const lastScrollY = useRef(0); // ✅ FIX

  const location = useLocation();

  // ✅ Hide only on blog detail page
  const hideNavbar = /^\/blog\/.+/.test(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky background
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }

      // Hide on scroll down, show on scroll up
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = window.scrollY;
    };

    const handleClick = (event) => {
      if (expand && !event.target.closest(".navbar")) {
        updateExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [expand]);

  return (
    <>
      {!hideNavbar && (
        <Navbar
          expanded={expand}
          fixed="top"
          expand="md"
          className={`modern-navbar ${navColour ? "sticky" : ""} ${
            showNav ? "show-nav" : "hide-nav"
          }`}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>

            <Navbar.Toggle
              onClick={() => updateExpanded(expand ? false : "expanded")}
              className="custom-toggler"
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>

            <Navbar.Collapse>
              <Nav className="ms-auto nav-links">
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome /> Home
                </Nav.Link>

                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser /> About
                </Nav.Link>

                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen /> Projects
                </Nav.Link>

                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument /> Resume
                </Nav.Link>

                <Nav.Link as={Link} to="/Experience" onClick={() => updateExpanded(false)}>
                  <HiOutlineBriefcase /> Work
                </Nav.Link>

                <Nav.Link as={Link} to="/blog" onClick={() => updateExpanded(false)}>
                  <FaBlog /> Blog
                </Nav.Link>

                <Nav.Item className="fork-btn">
  <a
    href="https://github.com/pibarel27"
    target="_blank"
    rel="noreferrer"
    className="fork-pill"
  >
    <CgGitFork className="icon" />
    <AiFillStar className="icon" />
  </a>
</Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <style>{`
        .modern-navbar {
          backdrop-filter: blur(10px);
          background: rgba(15, 12, 41, 0.6);
          transition: transform 0.4s ease, background 0.4s ease;
          padding: 10px 0;
        }

        .fork-pill {
  margin-left: 20px;
  background: linear-gradient(135deg, #c770f0, #8a2be2);
  padding: 10px 18px;
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

/* Icons */
.fork-pill .icon {
  font-size: 16px;
  transition: transform 0.3s ease;
}

/* Hover animation */
.fork-pill:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(199, 112, 240, 0.7);
  color: white;
}

/* Icon hover bounce */
.fork-pill:hover .icon {
  transform: translateY(-2px);
}

        .modern-navbar.sticky {
          background: rgba(20, 20, 60, 0.95);
          box-shadow: 0 5px 20px rgba(0,0,0,0.4);
        }

        .show-nav {
          transform: translateY(0);
        }

        .hide-nav {
          transform: translateY(-100%);
        }

        .logo {
          height: 45px;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.1);
        }

        .nav-links .nav-link {
          color: white !important;
          margin-left: 20px;
          position: relative;
          font-weight: 500;
        }

        .nav-links .nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -5px;
          background: #c770f0;
          transition: 0.3s ease;
        }

        .nav-links .nav-link:hover::after {
          width: 100%;
        }

        .nav-links .nav-link:hover {
          color: #c770f0 !important;
        }

        .fork-btn-inner {
          margin-left: 20px;
          background: linear-gradient(45deg, #c770f0, #7928ca);
          border: none;
          border-radius: 25px;
        }

        .custom-toggler span {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px;
          background: white;
        }

        @media (max-width: 768px) {
          .nav-links {
            text-align: center;
            padding-top: 15px;
          }

          .nav-links .nav-link {
            margin: 15px 0;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;