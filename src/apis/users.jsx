import axios from 'axios';
const Users_URL ="http://localhost:3333/users/"





export const getUsersBooking =  async (Id) => {
  try{
    var response =await  axios.get(Users_URL+Id);
    return(response.data.bookingId);
  }catch(err){
    console.log(err)
  }
    return(response.data.bookingId);
   //return(getSessionData(currentMonth,currentYear))
};





