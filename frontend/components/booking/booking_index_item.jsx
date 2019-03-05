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
        

        if (this.props.spot === undefined){
            return null
        }

        return(
            <div>
                <div>{this.props.spot.name}</div>
                <div>{this.props.booking.checkIn}</div>
                <div>{this.props.booking.checkOut}</div>
                <div>{this.props.spot.rate}</div>
                <div>
                    <button onClick={this.deleteBooking}>Cancle Reservation</button>
                </div>
            </div>
            
        )

    }




}

export default BookingIndexitem;