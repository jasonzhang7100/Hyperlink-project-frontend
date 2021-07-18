import axios from 'axios';

const addBooking = async (bookingInfo) => {
  const json = JSON.stringify(bookingInfo);
  return axios.post('http://localhost:3000/api/bookings', json, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  });
};

export default addBooking;
