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
export const Content = styled.p`
  color: rgb(60, 60, 60);
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
  font-weight: lighter;
`;
export const IconContainer = styled.span`
  font-size: 22px;
  color: rgb(130, 130, 130);
  font-weight: lighter;
  &:hover {
    color: #e53935;
    cursor: pointer;
  }
`;
export const Edit = styled.span`
  background-color: rgb(121, 104, 236);
  color: white;
  border-radius: 4px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.div`
  width: 100%;
`;
export const Label = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: rgb(50, 50, 50);
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 17px;
  border: 1px solid rgb(235, 235, 235);
  margin-bottom: 10px;
  color: rgb(80, 80, 80);
  &:focus {
    outline: 0;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid rgb(235, 235, 235);
  font-size: 17px;
  margin-bottom: 10px;
  color: rgb(80, 80, 80);
  &:focus {
    outline: 0;
  }
`;
export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  background-color: ${props =>
    props.black ? 'rgb(95,101,114)' : 'rgb(121, 104, 236)'};
  color: white;
  padding: 9px 22px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const AuthWrapper = styled.div`
  width: 70%;
  margin: auto;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const Instead = styled.p`
  color: rgb(100, 100, 100);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: rgb(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  width: 60%;
  height: 50%;
  @media (max-width: 769px) {
    width: 85%;
    height: 80%;
  }
`;
export const FixContainer = styled.div`
  align-self: flex-end;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
