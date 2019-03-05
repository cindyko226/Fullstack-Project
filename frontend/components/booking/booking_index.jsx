import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchBookings()
    }

    render(){
        
        let bookingItems = this.props.bookings.map( booking=> {
            return(
                <BookingIndexItem 
                booking = {booking}
                spot={this.props.spots[booking.spotId]}
                key={booking.id}
                deleteBooking={this.props.deleteBooking}
                history={this.props.history}
                />
            )
        })
        
        return(
            <div>
                <div>Your Trips</div>
                <div>{bookingItems}</div>
            </div>
        )

    }



}

export default BookingIndex;
