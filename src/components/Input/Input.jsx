import styled, { css } from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: rgba(196, 196, 196, 0.23);
  height: 40px;
  padding: 0 15px;
  margin: 0px 10px 21px 0px;
  
  ${(props) => ({
    sm: css`
      width: 155px;
    `,
    lg: css`
      width: 350px;
    `,
  }[props.variant])}
`;

export default Input;
