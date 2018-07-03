import styled from 'styled-components';
import { Navbar } from 'react-materialize';

export const firstContainer = {
  backgroundColor: '#6f5499',
};

export const FooterContainer = styled.div`
  color: #616161;
  background-color: #000000;
`;

export const CustomNavbar = styled(Navbar)`
  height: 0;
  backgroundColor: transparent;
  box-shadow: none;
`;

export const CustomA = styled.a`
  color: #616161;
  text-decoration: underline;
`;
