import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../atoms/input';

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

`;

export default class loginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
  }
  

  onChange(e){
    console.log(e)
  }

  render() {
    return (
      <LoginFormWrapper>
        <Input
          label="username"
          onChange={this.onChange}
        />
        <Input
          label="password"
          type="password"
          onChange={this.onChange}
        />
      </LoginFormWrapper>
    );
  }
}