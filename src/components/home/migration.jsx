import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink as RouterLink } from "react-router-dom";

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">{props.children}</div>
    </div>
  );
};

export const NavLink = (props) => {
  const { className, onClick, ...rest } = props;
  return (
    <Nav.Link {...rest} onClick={onClick}>
      <span className={className}>{props.children}</span>
    </Nav.Link>
  );
};

export const RouterNavLink = (props) => {
  const { className, onClick, activeClassName, to, end, ...rest } = props;
  return (
    <Nav.Link
      as={RouterLink}
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive ? `${className} active` : className
      }
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      {...rest}
    >
      <span className={className}>{props.children}</span>
    </Nav.Link>
  );
};
