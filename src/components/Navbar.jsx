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
  orchestrate,
} from "../editable-stuff/config.js";
import { NavLink, RouterNavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeItem, setActiveItem] = useState("");
  const navbarMenuRef = React.useRef();
  const navbarTogglerRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  // Reset active item when navigating to blog
  useEffect(() => {
    if (location.pathname === "/blog") {
      setActiveItem("blog");
    } else if (location.pathname === "/") {
      // Handle home page - can set to default nav item if needed
    }

    // Reset isTop state when navigating back to home page
    if (location.pathname === "/") {
      // When returning to home, check scroll position to determine opacity
      if (window.scrollY <= 55) {
        setIsTop(true);
      }
    } else {
      // On any non-home page (like blog), force navbar to be opaque
      setIsTop(false);
    }

    // Scroll to top on any navigation change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      if (!ref.current) return;

      // Only update isTop based on scroll if we're on the home page
      if (isHomePage) {
        currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
          ? setIsTop(true)
          : setIsTop(false);
      }
      setScrollPosition(currPos.y);
    },
    [navBottom, isHomePage]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    if (!ref.current) return;

    // Only update isTop based on navBottom if we're on the home page
    if (isHomePage) {
      navBottom - scrollPosition >= ref.current.offsetTop
        ? setIsTop(false)
        : setIsTop(true);
    }
  }, [navBottom, navbarDimensions, ref, scrollPosition, isHomePage]);

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  // Function to handle blog navigation with fade
  const handleBlogClick = (e) => {
    e.preventDefault();
    handleNavClick("blog");

    // Collapse navbar if expanded on mobile
    const navbarCollapse = document.getElementById("basic-navbar-nav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarTogglerRef.current.click();
    }

    // Only apply fade if we're not already on the blog page
    if (location.pathname !== "/blog") {
      // Apply fade-out to entire body before navigation
      document.body.classList.remove("fade-in-transition");
      document.body.classList.add("fade-out-transition");

      // Delay navigation to allow for fade effect
      setTimeout(() => {
        navigate("/blog");
        // Scroll to top after navigation
        window.scrollTo(0, 0);
      }, 300);
    } else {
      // If already on blog page, just scroll to top
      window.scrollTo(0, 0);
    }
  };

  // Function to handle home navigation with fade
  const handleHomeClick = (e) => {
    e.preventDefault();
    handleNavClick("");

    // Collapse navbar if expanded on mobile
    const navbarCollapse = document.getElementById("basic-navbar-nav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarTogglerRef.current.click();
    }

    // Only apply fade if we're not already on the home page
    if (location.pathname !== "/") {
      // Apply fade-out to entire body before navigation
      document.body.classList.remove("fade-in-transition");
      document.body.classList.add("fade-out-transition");

      // Delay navigation to allow for fade effect
      setTimeout(() => {
        // Explicitly set navbar to transparent when navigating to home
        setIsTop(true);

        navigate("/");
        // Scroll to top after navigation
        window.scrollTo(0, 0);
        // After a slight delay, go to the home anchor
        setTimeout(() => {
          window.location.hash = "home";
        }, 100);
      }, 300);
    } else {
      // If already on home page, scroll to top first, then navigate to the anchor
      window.scrollTo(0, 0);
      window.location.hash = "home";
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
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="toggler"
        ref={navbarTogglerRef}
      />
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
          {orchestrate.show && (
            <NavLink
              className={`nav-item lead ${
                activeItem === "orchestrate" ? "active" : ""
              }`}
              href={process.env.PUBLIC_URL + "/#orchestrate"}
              eventKey="3a"
              onClick={() => handleNavClick("orchestrate")}
            >
              Orchestrate
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
