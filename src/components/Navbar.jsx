import React, { useState, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import {
  repos,
  about,
  experience,
  education,
  blog,
} from "../editable-stuff/config.js";
import { NavLink, RouterNavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeItem, setActiveItem] = useState("");
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  const location = useLocation();
  const navigate = useNavigate();

  // Reset active item when navigating to blog
  useEffect(() => {
    if (location.pathname === "/blog") {
      setActiveItem("blog");
    } else if (location.pathname === "/") {
      // Handle home page - can set to default nav item if needed
    }
  }, [location.pathname]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      if (!ref.current) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    if (!ref.current) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  // Function to handle blog navigation with fade
  const handleBlogClick = (e) => {
    e.preventDefault();
    handleNavClick("blog");

    // Apply fade-out to entire body before navigation
    document.body.classList.remove("fade-in-transition");
    document.body.classList.add("fade-out-transition");

    // Delay navigation to allow for fade effect
    setTimeout(() => {
      navigate("/blog");
    }, 300);
  };

  // Function to handle home navigation with fade
  const handleHomeClick = (e) => {
    e.preventDefault();
    handleNavClick("");

    // Only apply fade if we're not already on the home page
    if (location.pathname !== "/") {
      // Apply fade-out to entire body before navigation
      document.body.classList.remove("fade-in-transition");
      document.body.classList.add("fade-out-transition");

      // Delay navigation to allow for fade effect
      setTimeout(() => {
        navigate("/");
      }, 300);
    } else {
      // If already on home page, just navigate to the anchor
      window.location.href = process.env.PUBLIC_URL + "/#home";
    }
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#home"}
        onClick={handleHomeClick}
      >
        {`zack katancik`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {blog.show && (
            <RouterNavLink
              className={`nav-item lead ${
                activeItem === "blog" ? "active" : ""
              }`}
              to="/blog"
              eventKey="0"
              end={true}
              onClick={handleBlogClick}
            >
              Blog
            </RouterNavLink>
          )}
          {about.show && (
            <NavLink
              className={`nav-item lead ${
                activeItem === "about" ? "active" : ""
              }`}
              href={process.env.PUBLIC_URL + "/#aboutme"}
              eventKey="1"
              onClick={() => handleNavClick("about")}
            >
              About
            </NavLink>
          )}
          {education.show && (
            <NavLink
              className={`nav-item lead ${
                activeItem === "education" ? "active" : ""
              }`}
              href={process.env.PUBLIC_URL + "/#education"}
              eventKey="2"
              onClick={() => handleNavClick("education")}
            >
              Education
            </NavLink>
          )}
          {experience.show && (
            <NavLink
              className={`nav-item lead ${
                activeItem === "experience" ? "active" : ""
              }`}
              href={process.env.PUBLIC_URL + "/#experience"}
              eventKey="3"
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </NavLink>
          )}
          {repos.show && (
            <NavLink
              className={`nav-item lead ${
                activeItem === "projects" ? "active" : ""
              }`}
              href={process.env.PUBLIC_URL + "/#projects"}
              eventKey="4"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
