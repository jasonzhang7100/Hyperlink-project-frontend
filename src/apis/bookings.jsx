import axios from 'axios';
// Fake api
const UsersURL = 'http://localhost:3333/bookings/?bookingId=';

export const getBookingbyId = async (Id) => {
  try {
    const response = await axios.get(UsersURL + Id);
    return (response.data);
  } catch (err) {
    console.log(err);//eslint-disable-line
  }
  return ('');
};

export default getBookingbyId;
