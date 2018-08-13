import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LoginForm from '../molecules/LoginForm';
import Colors from '../styles/colors';

const LandingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.green};
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LandingTemplate() {
  axios.post('/auth', {
    username: 'hscottharrison',
    password: 'Password123'
  }).then(response => console.log(response))
  return (
    <LandingPageWrapper>
      <h2>ForeGo</h2>
      <LoginForm />
    </LandingPageWrapper>
  );
}
