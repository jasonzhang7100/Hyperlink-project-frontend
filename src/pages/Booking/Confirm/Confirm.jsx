import React from 'react';
import PropTypes from 'prop-types';

const Confirm = ({ paid, formData }) => (paid === true ? (
  <div>
    付款成功
    {formData.name}
  </div>
) : <div>付款失败</div>);

// 加个按钮。如果付款成功，点击按钮发送formDAta给后端

Confirm.propTypes = {
  paid: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string,
    mobile: PropTypes.number,
    booking: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default Confirm;
