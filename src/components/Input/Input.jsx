import styled, { css } from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: rgba(196, 196, 196, 0.23);
  height: 35px;
  padding: 0 15px;
  
  ${(props) => ({
    smLeft: css`
      width: 170px;
      margin-right: 10px;
    `,
    smRight: css`
      width: 170px;
    `,
    lg: css`
      width: 350px;
    `,
  }[props.size])}

  ${(props) => props.error && css`
    background-color: rgba(255, 0, 0, 0.05);
  `}
`;

export default Input;
