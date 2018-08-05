import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/colors';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${Colors.lightGreen};
`;

export default function NavBar() {
  return (
    <NavBarWrapper />
  );
}
