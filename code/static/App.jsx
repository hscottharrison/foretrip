import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import NavBar from './src/organisms/NavBar';
import Landing from './src/pages/Landing';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default function App() {
  return (
    <AppWrapper>
      <Router>
        <Landing path="/" />
      </Router>
    </AppWrapper>
  );
}
