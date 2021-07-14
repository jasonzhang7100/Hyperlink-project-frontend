import React from 'react';

const Confirm = ({ paid, formData }) => (paid === true ? <div>付款成功</div> : <div>付款失败</div>);

// 加个按钮。如果付款成功，点击按钮发送formDAta给后端

export default Confirm;
