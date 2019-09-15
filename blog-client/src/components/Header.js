import React from 'react';
import { Link } from '@reach/router';
import { Navbar, Nav, NavLink } from '../styles/index';

const Header = () => {
  return (
    <Navbar>
      <Nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="create">Create</NavLink>
        <NavLink to="account">Account</NavLink>
      </Nav>
    </Navbar>
  );
};
export default Header;
