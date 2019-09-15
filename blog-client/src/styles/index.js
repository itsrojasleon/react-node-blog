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
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  border: 1px solid rgb(240, 240, 240);
  margin-bottom: 10px;
  padding: 10px;
`;

export const Title = styled.h2`
  color: rgb(121, 104, 236);
  margin: ${props => (props.margin ? 0 : null)};
`;
export const Text = styled.p`
  color: rgb(100, 100, 100);
  line-height: 25px;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`;
