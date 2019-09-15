import React from 'react';
import { Navbar, Nav, NavLink } from '../styles/index';
import { FiSettings, FiPlusCircle, FiHome } from 'react-icons/fi';

const Header = () => {
  return (
    <Navbar>
      <Nav>
        <NavLink to="">
          <FiHome /> Home
        </NavLink>
        <NavLink to="create">
          <FiPlusCircle /> Create
        </NavLink>
        <NavLink to="account">
          <FiSettings /> Account
        </NavLink>
      </Nav>
    </Navbar>
  );
};
export default Header;
