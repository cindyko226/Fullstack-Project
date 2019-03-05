import React from 'react';


class BookingIndexitem extends React.Component {
    constructor(props){
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this)
    }



    deleteBooking(){
        this.props.deleteBooking(this.props.booking.id)
    }

    rende(){
        const {booking, spot} = this.props;
        
        if (spot === undefined){
            return null
        }

        return(
            <div>
                <div>{spot.title}</div>
                <div>{booking.checkIn}</div>
                <div>{booking.checkOut}</div>
                <div>{spot.rate}</div>
                <div>
                    <button onClick={this.deleteBooking}>Cancle Reservation</button>
                </div>
            </div>
            
        )

    }




}

export default BookingIndexitem;