// 此按钮为用于所有回退功能的按钮
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ButtonTo = styled.div`
  height: 26px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  letter-spacing: 0.46px;
  text-align: left;
  color: #818181;
  &:hover {
    color: red;
    cursor: pointer;
  }
  ${(props) => {
    switch (props.size) {
      case 'lg':
        return css`
          width: 193px;
          margin: 76px 20px 113px 317px;
        `;
      case 'md':
        return css`
          width: 155px;
          margin: 73px 19px 113px 355px;
        `;
      default:
        return css`
          width: 117px;
          margin: 75px 22px 107px 391px;
        `;
    }
  }}
`;

const ButtonGoBack = ({ children, size }) => (
  <ButtonTo size={size}>{children}</ButtonTo>
);
ButtonGoBack.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonGoBack;
