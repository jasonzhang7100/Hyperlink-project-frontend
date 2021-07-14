import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Label = styled.label`
  margin: 0 0 5px 5px;
`;

const Item = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormItem = ({
  label,
  htmlFor,
  children,
}) => (
  <Item>
    {label && (<Label htmlFor={htmlFor}>{label}</Label>)}
    {children}
  </Item>
);

FormItem.propTypes = {
  label: propTypes.string.isRequired,
  htmlFor: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default FormItem;
