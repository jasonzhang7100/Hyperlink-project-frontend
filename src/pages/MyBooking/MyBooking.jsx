import React from 'react'
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import BookingInfowithButton from "../../components/BookingInfowithButton"
import {getUsersBooking} from "../../apis/users"
import {getBookingbyId} from "../../apis/bookings"

const BookingCard = styled.div`
text-align: center;
margin: 0 auto;
width: 580px;
height: 674px;


background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
border-radius: 50px;`;

const BookingTitle = styled.div`
text-align: center;
margin-top:50px;
font-family: Baloo;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 57px;
/* identical to box height */

text-align: center;

color: #171A4F;
`;

const UpcomingTitle = styled.div`
width: 82px;
height: 21px;
left: 510px;
top: 362px;
margin-top:20px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
margin-left:20px;
`;

const Vector1 = styled.div`
margin-top:10px;
width: 120px;
height: 0px;
color: #181B50;
border: 1px solid #181B50;
`;

const Vector2 = styled.div`
width: 580px;
height: 0px;

border: 1px solid #C7C7C7;
`;

const BookingExplain = styled.div`
text-align: center;
margin-top:20px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #000000;`;



const BacktoAvailability = styled.div`
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
/* identical to box height, or 162% */
letter-spacing: 0.46px;
text-transform: uppercase;
Margin-top: 250px;
color: #818181;
margin-top:150px`;

class MyBooking extends React.Component {
    constructor(props){
       super(props);
       this.state={
           UserId:1,
           BookingList:[],
           BookingDetails:[],
           ready:false
       }
    
       this.getBookingDetails()
   }
   
  async getBookingDetails(){
    this.setState({
      BookingList:await getUsersBooking(this.state.UserId)
       
    })
      //console.log(this.state.BookingList[0])
      var Details =[]
      //Details[this.state.BookingList.length]=""
      for (var i=0;i<this.state.BookingList.length;i++)
      { 
        Details[i] = await getBookingbyId(this.state.BookingList[i])
        //console.log(Details[i] )
      }

      this.setState({
        BookingDetails:await Details,
        ready:true
      })
       this.state.BookingDetails=await Details
  }

   render() {
     {console.log(this.state.ready?this.state.BookingDetails[1][0]:'not')}
    return(
        <>
        
       <BookingCard>
         <BookingTitle>My Booking </BookingTitle>
         <BookingExplain>You can check your booking status here and edit or cancel it </BookingExplain>
         <UpcomingTitle>Bookings </UpcomingTitle>
         <Vector1></Vector1>
         <Vector2></Vector2>
         {this.state.BookingList.map((index) => (
           <BookingInfowithButton key={index} 
             date={this.state.ready?this.state.BookingDetails[index-1][0].bookingDate:"01-01-2021"} 
            id={this.state.ready?this.state.BookingDetails[index-1][0].bookingId:'0'} 
            guestAmount={this.state.ready?this.state.BookingDetails[index-1][0].guestAmout:0} 
            
           />
          ))}

         <BacktoAvailability type="primary">
           <Link to="" style={{ textDecoration: 'none' ,color:'#818181'}}>back to Availability</Link>
         </BacktoAvailability>

       </BookingCard>
       
        
    
       
       
      </>
    )
  }

}

export default MyBooking;
