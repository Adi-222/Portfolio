import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../Assets/logo.jpeg";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = useCallback(() => {
    updateNavbar(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{
        backgroundColor: navColour ? "#222" : "transparent",
        transition: "background 0.3s ease-in-out",
        padding: "10px 0",
        zIndex: 9999,
      }}
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="brand"
            style={{
              maxHeight: "65px",
              width: "auto",
              objectFit: "contain",
              borderRadius: "10px",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1) rotate(2deg)";
              e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1) rotate(0deg)";
              e.target.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {[
              { href: "#home", label: "Home", icon: <AiOutlineHome /> },
              { href: "#about", label: "About", icon: <AiOutlineUser /> },
              { href: "#projects", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
              { href: "#resume", label: "Resume", icon: <CgFileDocument /> },
            ].map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as="a"
                  href={item.href}
                  onClick={() => updateExpanded(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "10px 15px",
                    fontSize: "1.1em",
                    color: "white",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    position: "relative",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#bbb")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  {item.icon} {item.label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      width: "0%",
                      height: "2px",
                      background: "white",
                      transition: "width 0.3s ease, left 0.3s ease",
                    }}
                    className="nav-hover-underline"
                  ></span>
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* GitHub Button */}
            <Nav.Item>
              <Button
                href="https://github.com/Adi-222"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "1.2em",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#333",
                  border: "none",
                  position: "relative",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#555";
                  const underline = e.target.querySelector(".button-hover-line");
                  underline.style.width = "100%";
                  underline.style.left = "0";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#333";
                  const underline = e.target.querySelector(".button-hover-line");
                  underline.style.width = "0%";
                  underline.style.left = "50%";
                }}
              >
                <CgGitFork />
                <AiFillStar />
                <span
                  className="button-hover-line"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    width: "0%",
                    height: "3px",
                    background: "white",
                    transition: "width 0.3s ease, left 0.3s ease",
                  }}
                ></span>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
