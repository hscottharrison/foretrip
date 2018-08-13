import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const Input = styled.input`
  border: none;
`;

const Label = styled.p`
  margin: 0;
  color: #fff;
`;

function InputField({ label, type, onChange }) {
  return (
    <InputFieldWrapper>
      <Label>
        {label}
      </Label>
      <Input
        type={type}
        onChange={onChange}
      />
    </InputFieldWrapper>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  label: '',
  type: 'text'
};

export default InputField;
