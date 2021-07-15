import styled, { css } from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: rgba(196, 196, 196, 0.23);
  height: 35px;
  padding: 0 15px;
  margin: 0px 10px 0px 0px;
  
  ${(props) => ({
    sm: css`
      width: 170px;
    `,
    lg: css`
      width: 350px;
    `,
  }[props.variant])}

  ${(props) => props.error && css`
    background-color: rgba(255, 0, 0, 0.05);
  `}
`;

export default Input;
