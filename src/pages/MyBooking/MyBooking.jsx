// main page of Mybooking part, dealing with links between pages
import React from 'react';
import EditBooking from './EditBooking';
import ConfirmEdit from './ConfirmEdit';
import ViewBooking from './ViewBooking';
import { getUsersBooking } from '../../apis/users';
import { getBookingbyId } from '../../apis/bookings';

class MyBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: {},
      UserId: 1,
      BookingList: [],
      BookingDetails: [],
      ready: false,
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
    this.getBookingDetails();
  }

  handleFormData(index) {
    const { BookingDetails } = this.state;
    // console.log('here'+BookingDetails)
    this.setState({
      formData: BookingDetails[index - 1],
    });
  }

  handleNextStep() {
    const { step } = this.state;
    if (step < 3) this.setState({ step: step + 1 });
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
    const {
      step, formData, BookingDetails, BookingList, ready,
      index,
    } = this.state;
    // {console.log(ready?this.state.BookingDetails[1][0]:'not')}
    return (
      <>
        {step === 1 && ready === true && (
          <ViewBooking
            // date={date}
            BookingDetails={BookingDetails}
            BookingList={BookingList}
            handleNextStep={this.handleNextStep}
            handleFormData={this.handleFormData}
            ready={ready}
            index={index}
          />
        )}
        {step === 2 && (
          <EditBooking
            BookingDetails={BookingDetails}
            handleNextStep={this.handleNextStep}
            handleFormData={this.handleFormData}
            formData={formData}
          />
        )}
        {step === 3
        && (
        <ConfirmEdit
          formData={formData}
        />
        )}
      </>
    );
  }
}

export default MyBooking;
