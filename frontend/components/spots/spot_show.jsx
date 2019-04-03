import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import ShowMap from '../map/show_map';
import SpotMapContainer from '../map/spot_map_container';
import BookingFormContainer from '../booking/booking_form_container';
import EditBookingFormContainer from '../booking/edit_booking_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';


import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';




class SpotShow extends React.Component {

    constructor(props){
        super(props);
        // this.state
        
    }


    componentDidMount(){
        // debugger
        this.props.fetchSpot(this.props.match.params.spotId);
        window.scrollTo(0, 0);
        this.props.fetchBookings();
        this.props.fetchReviews();
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    renderBookingForm() {
        if (this.props.location.pathname.includes('edit')) {
            return <EditBookingFormContainer spot={this.props.spot}/>;
        } else {
            return <BookingFormContainer spot={this.props.spot} />;
        }
    }


    isDayBooked(day) {
        // debugger
        for (let i = 0; i < this.props.bookings.length; i++) {
            const start = this.props.bookings[i].checkIn;
            const end = this.props.bookings[i].checkOut;

            if (
                day.format().includes(start) ||
                day.format().includes(end)
            ) {
                return true;
            }else if (day.isBetween(start, end)) {
                return true;
            }
        }
        return false;
    }

    render(){




        // const unavailableDates = () => {
        //     let unavDates = [];
        //     for (let i = 0; i < this.props.bookings.length; i++) {
        //         unavDates = unavDates.concat(this.props.bookings[i].unavailable_dates);
        //     }
        //     return unavDates;
        // };

        // const isDayBlocked = (day) => {
        //     if (this.props.bookings) {
        //         return unavailableDates().some(date => (
        //             moment(date).isSame(day, 'day')
        //         ));
        //     } return true;
        // };



        if (!this.props.spot) {
            return null;
        }


        if (!this.props.reviews) {
            return null;
        }


        return(
            <div className="show-container">
                <div>
                    <div>
                        <NavBarContainer />
                    </div>

                </div>

                <div className="spot-pictures">
                    <div className="large-pix-container">
                        <div className="large-pix">
                            < img className="large" src={this.props.spot.photoUrls[0]}  />
                        </div>
                    </div>
                    <div className="small-pix-group">
                        <div className="small-pix">
                                <div className="small-pic-container">

                                    <div className="small-pic">

                                    < img className="small1" src={this.props.spot.photoUrls[1]}  />
                                    </div>
                                </div>

                                <div className="small-pic-container">
                                    <div className="small-pic">

                                    < img className="small2" src={this.props.spot.photoUrls[2]} />
                                    </div>
                                </div>
                        </div>
                        <div className="small-pix">
                            <div className="small-pic-container">
                                <div className="small-pic">
                                    < img className="small3" src={this.props.spot.photoUrls[3]} />
                                </div>
                            </div>
                            <div className="small-pic-container">
                                <div className="small-pic">
                                    < img className="small4" src={this.props.spot.photoUrls[4]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "spot-info-container">
                    <div className="spot-detail-container">
                        <div className="spot-detail-title-group" >
                                <div className="title-group">
                                    <div className="spot-detail-type">{this.props.spot.homeType}</div>
                                    <div className="spot-detail-title">{this.props.spot.name}</div>
                                    <div className="spot-detail-city">{this.props.spot.city}</div>
                                </div>
                                <div className="name-group">
                                    <div>< img className="user-img" src={this.props.spot.hostPhotourl} /></div>
                                    <div className="host-name">{this.props.spot.host}</div>
                                </div>
                        </div>
                        <div className="spot-detail-des">{this.props.spot.description}</div>
                        <div className="ame-group">
                            <div className="spot-detail-ame">Amenities</div>
                            <div className="ame-detail-group" > 
                                <div className="left-ame">
                                    <div className="wifi">
                                        <div><i className="fas fa-wifi"></i></div>
                                        <div>Wifi</div>
                                    </div>
                                    <div className="coffee">
                                        <div><i className="fas fa-coffee"></i></div>
                                        <div>Coffee maker</div>
                                    </div>
                                </div>
                                <div className="right-ame">
                                    <div className="laptop">
                                        <div><i className="fas fa-laptop"></i></div>
                                        <div>Laptop friendly workspace</div>
                                    </div>
                                    <div className="shower">
                                        <div><i className="fas fa-shower"></i></div>
                                        <div>Hot water</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sleep-group">
                            <div className="spot-detail-sleep">Sleeping arrangements</div>
                            <div className="bed-group">
                                <div><i className="fas fa-bed"></i></div>
                                <div>Bedroom 1</div>
                                <div><p>1 queen bed</p></div>
                            </div>
                        </div>
                        <div className="spot-detail-ava" >
                        
                        
                          <div>Availability</div>
                        
                         <div>

                            
                            <DayPickerRangeController
                                    startDate={null}
                                    endDate={null}
                                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
                                    focusedInput={null}
                                    onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
                                    numberOfMonths={2}
                                    hideKeyboardShortcutsPanel
                                    isDayBlocked={(day) => this.isDayBooked(day)}
                                />
                         </div>
                        
                        
                    
                        </div>
                        <div className="review-star" >
                            <div className="spot-detail-review">200 REVIEWS</div>
                            
                            <div className="show-rating">
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                            </div>
                            
                        </div>
                        <div className="spot-detail-reviews">
                        
                        
                        <ReviewIndexContainer />
                        </div>
                        
                        <div className="map-group">
                            <div className="map-title">The neighborhood</div>
                            <div className="spot-detail-map"><ShowMap spot={this.props.spot} /></div>
                        </div>
                        <div className="spot-detail-pol">
                            <div className="pol-group">
                                <div>
                                    Policies
                                </div>
                                <div className="rules">
                                    <div>
                                    House Rules

                                    </div>
                                    <ul>
                                        <li>No smoking, partities, or events</li>
                                        <li>Check-in is anytime after 2PM and check-out by 11AM</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rules">
                                <div>
                                Cancellations
                                </div>
                                <ul>
                                    <li>Free cancellation for 48 hours</li>
                                    <li>After that, get a full refund, minus the service fee.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="booking-container">
                        {this.renderBookingForm()}
                    </div>
                </div>






            </div>
        )

    }


}

export default SpotShow;