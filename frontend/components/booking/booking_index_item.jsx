import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewFormContainer from '../reviews/reviewform_container';
import EditBookingFormContainer from './edit_booking_form_container';

class BookingIndexitem extends React.Component {
    constructor(props){
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }



    deleteBooking(){
        this.props.deleteBooking(this.props.booking.id)
    }

    handleClick() {
        this.props.history.push(`/spots/${this.props.spot.id}/edit/${this.props.booking.id}`);
    }
    
   



    render(){
        
        if (this.props.spot === undefined) {
            return null;
        }
    

        return(
            
            <div className="booking-each-container">
                <div>
                    < img className="booking-pic" src={this.props.spot.photoUrls[0]} />
                </div>
                <div className="booking-each-detail">
                    <div className="booking-each-title">{this.props.spot.name}</div>
                    <div className="booking-each-checkin" >Check In: {this.props.booking.checkIn}</div>
                    <div className="booking-each-checkout">Check Out: {this.props.booking.checkOut}</div>
                    <div className="booking-cancel">
                        <button onClick={this.handleClick} >Update Reservation</button>
                        <button onClick={this.deleteBooking}>Cancel Reservation</button>
                    </div>


                        <div>

                        <ReviewFormContainer 
                        key={this.props.spot.id}
                        spot={this.props.spot}/>
                        </div>
                    

                </div>

                <div>
                    
                </div>
            </div>
            
            )
            
        }
        
        
        
        
    }
    
    export default withRouter(BookingIndexitem);


    
   




