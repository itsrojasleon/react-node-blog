import styled from '@emotion/styled';
import { Link } from '@reach/router';

export const Container = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 769px) {
    width: 90%;
  }
`;

export const Navbar = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
export const Nav = styled.nav`
  padding: 15px;
  width: 60%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const NavLink = styled(Link)`
  color: red;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  border: 1px solid rgb(240, 240, 240);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
export const Time = styled.span`
  color: rgb(130, 130, 130);
`;
export const IconContainer = styled.span`
  font-size: 22px;
  &:hover {
    color: #e53935;
    cursor: pointer;
  }
`;
