import styled from '@emotion/styled';
import { Link } from '@reach/router';

export const Container = styled.div`
  width: 85%;
  margin: auto;
`;

export const Navbar = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
export const Nav = styled.nav`
  padding: 15px;
  width: 85%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
export const NavLink = styled(Link)`
  color: red;
  text-decoration: none;
  color: rgb(50, 50, 50);
`;
