import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
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

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    function handleDocumentClick(event) {
      if (expand && !event.target.closest(".navbar")) {
        updateExpanded(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [expand]);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={`modern-navbar ${navColour ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
            className="custom-toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-links">

              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://pibablog.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImBlog /> Blog
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/pibarel27"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork /> <AiFillStar />
                </Button>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 🔥 Internal Styling */}
      <style>{`
        .modern-navbar {
          backdrop-filter: blur(10px);
          background: rgba(15, 12, 41, 0.6);
          transition: all 0.4s ease;
          padding: 10px 0;
        }

        .modern-navbar.sticky {
          background: rgba(20, 20, 60, 0.95);
          box-shadow: 0 5px 20px rgba(0,0,0,0.4);
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
          transition: 0.3s;
        }

        /* Underline animation */
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

        /* GitHub Button */
        .fork-btn-inner {
          background: linear-gradient(45deg, #c770f0, #7928ca);
          border: none;
          padding: 6px 14px;
          border-radius: 25px;
          transition: 0.3s ease;
        }

        .fork-btn-inner:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px #c770f0;
        }

        /* Hamburger Animation */
        .custom-toggler span {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px;
          background: white;
          transition: 0.3s;
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