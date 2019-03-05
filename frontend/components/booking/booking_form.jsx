import React from 'react';
// import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';


class BookingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            checkIn: null, 
            checkOut: null, 
            guestNumber: null, 
            focusedInput: null,
            spotId: this.props.spotId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(){
        return e => this.setState({
            guestNumber: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        if(!this.props.currentUser){
            this.props.openModal('login')
        }else{
            this.props.createBooking({
                checkIn: this.state.checkIn,
                checkOut: this.state.checkOut,
                guestNumber: this.state.guestNumber,
                spotId: this.state.spotId
            }).then(()=> this.props.history.push('/bookings'));
        }

    }


    render(){
        const {spot} = this.props;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>{spot.rate}</div>
                <div>Dates</div>
                 <div>
                     {/* <DateRangePicker
                        checkIn={this.state.checkIn} // momentPropTypes.momentObj or null,
                        checkInId="checkIn" // PropTypes.string.isRequired,
                        checkOut={this.state.checkOut} // momentPropTypes.momentObj or null,
                        checkOutId="checkOut" // PropTypes.string.isRequired,
                        onDatesChange={({ checkIn, CheckOut }) => this.setState({ checkIn, CheckOut })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        startDatePlaceholderText={'Check in'}
                        endDatePlaceholderText={'Check out'}
                        numberOfMonths={1}
                        minimumNights={1}  
                        // isDayBlocked={day => this.isDayBooked().includes(moment(day).format('YYYY-MM-DD'))}
                    /> */}
                 </div>
                 <div>Guests</div>
                 <div></div>
                 <div>
                    <input type="number" className="guest-number-input" min="1" max={spot.guestNumber} />
                 </div>
                 <div>
                    <input className="booking-form-input" type="submit" value="Book" />
                 </div>

                <div>
                    You won't be charged yet
                </div>

            </form>
        )
    }



}

export default BookingForm;