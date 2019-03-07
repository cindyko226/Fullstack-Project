import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import ShowMap from '../map/show_map';
import SpotMapContainer from '../map/spot_map_container';
import BookingFormContainer from '../booking/booking_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class SpotShow extends React.Component {

    constructor(props){
        super(props);
        // this.state
        
    }


    componentDidMount(){
        // debugger
        this.props.fetchSpot(this.props.match.params.spotId);
        window.scrollTo(0, 0);
        this.props.fetchReviews();
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render(){

        if (!this.props.spot) {
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
                        <div className="spot-detail-ava" >Availability</div>
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
                        Reviews
                        
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
                        <BookingFormContainer spot={this.props.spot}/>
                    </div>
                </div>






            </div>
        )

    }


}

export default SpotShow;