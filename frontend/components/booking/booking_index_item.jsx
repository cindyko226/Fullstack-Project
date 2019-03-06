import React from 'react';


class BookingIndexitem extends React.Component {
    constructor(props){
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this)
    }



    deleteBooking(){
        this.props.deleteBooking(this.props.booking.id)
    }

    render(){
        
        if (this.props.spot === undefined) {
            return null
        }
        // debugger

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
                        <button onClick={this.deleteBooking}>Cancel Reservation</button>
                    </div>
                </div>
            </div>
            
        )

    }




}

export default BookingIndexitem;