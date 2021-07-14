import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StepButton = styled.button`
  width: 6.5rem;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(24, 28, 77);
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const Form = ({ date, handleFormData, handleNextStep }) => {
  const formData = {
    // 这个数据应该从input获得，这里先写死了
    name: 'jason',
    mobile: 123456,
    booking: '至尊套餐',
    // 价格应该是从booking套餐推出来的，或者推出价格的逻辑写在父级
    price: 200,
  };

  const handleClick = () => {
    handleFormData(formData);
    handleNextStep();
  };

  return (
    <>
      这是从calendar传过来的时间（如果你要用到）:
      {date}
      <input placeholder="输入名字" />
      <input placeholder="输入电话" />
      <StepButton onClick={handleClick}>CONTINUE</StepButton>
    </>
  );
};

Form.propTypes = {
  date: PropTypes.string.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Form;
