import React from 'react';
import BookingIndexItem from './booking_index_item';
import NavBarContainer from '../nav-bar/nav_bar_container';

class BookingIndex extends React.Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchBookings();
        this.props.fetchSpots();
    }

    render(){
        // debugger 
        let userBookings = this.props.bookings.filter((booking) => booking.guestId === this.props.currentUser.id);

        let bookingItems = userBookings.map(booking => {
            // let spot = booking.guestId
            debugger
            return (
                <BookingIndexItem
                    booking={booking}
                    spot={this.props.spots[booking.spotId]}
                    key={booking.id}
                    deleteBooking={this.props.deleteBooking}
                    openModal = {this.props.openModal}
                />
            )
        })
        debugger
        return(
            <div>
                <div>
                    <NavBarContainer /> 
                </div>
                <div className="booking-index-info">

                    <div className="trip-title">
                        Your Trip
                    </div>

                    <div className="booking-detail-group">
                        <ul>
                            <li>
                                {bookingItems}
                            </li>
                        </ul>
                        
                </div>
                </div>
            </div>
        )
        
            }
        

}

export default BookingIndex;
