import axios from 'axios';
//Fake api
const Users_URL ="http://localhost:3333/bookings/?bookingId="





export const getBookingbyId =  async (Id) => {
  try{
    var response =await  axios.get(Users_URL+Id);
    return(response.data);
  }catch(err){
    console.log(err)
  }
    return(response.data);
   //return(getSessionData(currentMonth,currentYear))
};





