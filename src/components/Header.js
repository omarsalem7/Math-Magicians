import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'orange',
  };
  return (
    <>
      <ul className="header">
        <li>
          <NavLink style={linkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/quote">
            Quote
          </NavLink>
        </li>
      </ul>
      <h2 className="title">Math Magicians</h2>
    </>
  );
};

export default Header;
