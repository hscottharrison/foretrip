import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Colors from '../styles/colors';

const LandingNavWrapper = styled.div`
  height: 10%;
  width: 100%;
  background-color: ${Colors.green};
  opacity: 0.7;
`;

export default function LandingNav() {
  return (
    <LandingNavWrapper />
  );
}
