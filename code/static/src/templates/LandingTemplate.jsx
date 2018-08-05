import React from 'react';
import styled from 'styled-components';
import LandingNav from '../molecules/LandingNav';

const LandingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1521139802262-a3c85ac7faa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8156a7648263cc29f4f7ae533c3da5c3&auto=format&fit=crop&w=1674&q=80') no-repeat top center fixed;
  background-size: cover;
`;

export default function LandingTemplate() {
  return (
    <LandingPageWrapper>
      <LandingNav />
    </LandingPageWrapper>
  );
}
