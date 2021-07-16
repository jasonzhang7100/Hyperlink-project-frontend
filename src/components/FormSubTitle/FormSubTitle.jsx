import styled, { css } from 'styled-components';

const FormSubTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14px;
  text-align: center;
  margin-bottom: 20px;

  ${(props) => ({
    normal: css`
      font-family: 'Roboto';
    `,
    special: css`
      font-family: 'Raleway';
    `,
  }[props.font])}
`;

export default FormSubTitle;
