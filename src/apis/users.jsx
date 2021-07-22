import axios from 'axios';

const UsersURL = 'http://localhost:3333/users/';

export const getUsersBooking = async (Id) => {
  try {
    const response = await axios.get(UsersURL + Id);
    return (response.data.bookingId);
  } catch (err) {
    console.log(err);//eslint-disable-line
  }
  return ('');
};

export default getUsersBooking;
