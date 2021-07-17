import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookingInfowithButton from '../../components/BookingInfowithButton';
import { getUsersBooking } from '../../apis/users';
import { getBookingbyId } from '../../apis/bookings';

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
left: 510px;
width: 580px;
height: 0px;
border: 1px solid #C7C7C7;
`;

const BookingExplain = styled.div`
text-align: center;
margin-bottom: 1rem;
font-family: Roboto;
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
  constructor(props) {
    super(props);
    this.state = {
      UserId: 1,
      BookingList: [],
      BookingDetails: [],
      ready: false,
    };

    this.getBookingDetails();
  }

  async getBookingDetails() {
    const { UserId } = this.state;
    this.setState({
      BookingList: await getUsersBooking(UserId),

    });
    const Details = [];
    const { BookingList } = this.state;
    // for (var i = 0; i < BookingList.length; i++) {
    //   Details[i] = await getBookingbyId(BookingList[i]);
    // }
    // BookingList.map(async (ID) => {
    //   Details[ID] = await getBookingbyId(ID);
    //   console.log(Details[ID])
    // });
    // let i = 0;
    // while (i < BookingList.length) {
    //   Details[i] = await getBookingbyId(BookingList[i]);
    //   i += 1;
    // }
    Details[0] = await getBookingbyId(BookingList[0]);
    const a = Details[0];
    for (let i = 0; i < BookingList.length; i += 1) {
      Details[i] = a;
    }
    this.setState({
      BookingDetails: Details,
      ready: true,
    });
    this.state.BookingDetails = Details;
  }

  render() {
    const { BookingList, BookingDetails, ready } = this.state;
    /* {console.log(this.state.ready?this.state.BookingDetails[1][0]:'not')} */
    return (
      <>
        <BookingCard>
          <BookingTitle>My Booking </BookingTitle>
          <BookingExplain>
            You can check your booking status here and edit or cancel it
          </BookingExplain>
          <UpcomingTitle>Upcoming</UpcomingTitle>
          <Vector1 />
          <Vector2 />
          {BookingList.map((index) => (
            <BookingInfowithButton
              key={index}
              date={ready ? BookingDetails[index - 1][0].bookingDate : ''}
              id={ready ? BookingDetails[index - 1][0].bookingId : '0'}
              guestAmount={ready ? BookingDetails[index - 1][0].guestAmount : 0}
            />
          ))}

          <BacktoAvailability type="primary">
            <Link to="/" style={{ textDecoration: 'none', color: '#818181' }}>
              back to Availability
            </Link>
          </BacktoAvailability>

        </BookingCard>
      </>
    );
  }
}

export default MyBooking;
