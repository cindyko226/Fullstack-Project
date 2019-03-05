import React from 'react';
// import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';


class BookingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            check_in: null, 
            check_out: null, 
            guest_number: 1, 
            focusedInput: null,
            spot_id: this.props.spotId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ guest_number: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();

        if(!this.props.currentUser){
            this.props.openModal('login')
        }else{
            // debugger
            this.props.createBooking({
                
                check_in: this.state.check_in._d,
                check_out: this.state.check_out._d,
                guest_number: this.state.guest_number,
                spot_id: this.state.spot_id
            }).then(()=> this.props.history.push('/bookings'));
            // debugger
        }

    }


    render(){
        const {spot} = this.props;
        return(
            <div className="booking-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="booking-form-detail-container">
                        <div className="booking-form-rate">
                            <div className="form-rate-group">
                                <div className="form-rate">${spot.rate} </div>
                                <div className="form-rate-end"> per night</div>
                            </div>
                            <div>
                                <div className="booking-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="booking-form-date">

                            <div className="booking-form-date-title">Dates</div>
                            <div className="booking-form-date-picker">
                                <DateRangePicker
                                    startDate={this.state.check_in} // momentPropTypes.momentObj or null,
                                    startDateId="start_date_id" // PropTypes.string.isRequired,
                                    endDate={this.state.check_out} // momentPropTypes.momentObj or null,
                                    endDateId="end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={({ startDate, endDate }) => this.setState({ check_in: startDate, check_out: endDate })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    startDatePlaceholderText={'Check in'}
                                    endDatePlaceholderText={'Check out'}
                                    numberOfMonths={1}
                                    minimumNights={1}  
                                /> 
                            </div>
                        </div>

                        <div className="booking-form-guest"> 

                            <div className="booking-form-guest-title">Guests</div>
                            <div className="booking-form-guest-inout">
                                <input type="number" className="guest-number-input" min="1" max={spot.guest_number} 
                                onChange={this.handleChange} 
                                value={this.state.guest_number}/>
                            </div>

                        </div>


                        <div className="booking-form-input">
                            <input className="booking-form-input-button" type="submit" value="Request to Book" />
                        </div>

                        <div className="booking-form-footer">
                            You won't be charged yet
                        </div>

                    </div>
                </form>
            </div>
        )
    }



}

export default BookingForm;