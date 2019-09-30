import React from 'react';
import { Navbar, Nav, NavLink } from '../styles/index';
import { FiSettings, FiPlusCircle, FiHome } from 'react-icons/fi';

const Header = () => {
  const iconStyle = {
    marginRight: '3px'
  };

  const Link = props => (
    <NavLink
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? 'rgb(255,28,70)' : 'rgb(50, 50, 50)'
          }
        };
      }}
    ></NavLink>
  );

  return (
    <Navbar>
      <Nav>
        <Link to="">
          <FiHome style={iconStyle} /> Home
        </Link>
        <Link to="create">
          <FiPlusCircle style={iconStyle} /> Create
        </Link>
        <Link to="account">
          <FiSettings style={iconStyle} /> Account
        </Link>
      </Nav>
    </Navbar>
  );
};
export default Header;
