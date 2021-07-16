import styled, { css } from 'styled-components';

const FormTitle = styled.p`
  font-family: 'Roboto';
  text-align: center;

  ${(props) => ({
    primary: css`
      font-size: 24px;
      margin: 0;
    `,
    secondary: css`
      font-size: 20px;
      margin: 45px 0px 20px 0px;
    `,
  }[props.variant])}
`;

export default FormTitle;