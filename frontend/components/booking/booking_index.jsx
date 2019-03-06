import React from 'react';
import BookingIndexItem from './booking_index_item';
import NavBarContainer from '../nav-bar/nav_bar_container';

class BookingIndex extends React.Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchSpots();
        this.props.fetchBookings();
    }

    render(){
        
        
        
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
                        {this.props.bookings.map(booking => 
                            <li className="booking-single" key={booking.id}>
                                <BookingIndexItem
                                
                                booking={booking}
                                spot={this.props.spots[booking.spotId]}
                                deleteBooking={this.props.deleteBooking}
                            />
                            </li>
                            )}
                        </ul>
                        
                </div>
                </div>
            </div>
        )
        
            }
        
    //   {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}

}

export default BookingIndex;
