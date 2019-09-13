import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="">Home</Link>
        <Link to="create">Create</Link>
        <Link to="account">Account</Link>
      </nav>
    </header>
  );
};
export default Header;
