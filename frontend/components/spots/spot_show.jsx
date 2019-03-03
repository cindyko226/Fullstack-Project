import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import ShowMap from '../map/spot_map';
import SpotMapContainer from '../map/spot_map_container';



class SpotShow extends React.Component {

    constructor(props){
        super(props);
        // this.state
        
    }


    componentWillMount(){
        // debugger
        this.props.fetchSpot(this.props.match.params.spotId);
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
                        < img className="large" src={window.artURL} />
                        </div>
                    </div>
                    <div className="small-pix-group">
                        <div className="small-pix">
                                <div className="small-pic-container">

                                    <div className="small-pic">

                                        < img className="small1" src={window.int3URL} />
                                    </div>
                                </div>

                                <div className="small-pic-container">
                                    <div className="small-pic">

                                        < img className="small2" src={window.intURL} />
                                    </div>
                                </div>
                        </div>
                        <div className="small-pix">
                            <div className="small-pic-container">
                                <div className="small-pic">
                                    < img className="small3" src={window.int2URL} />
                                </div>
                            </div>
                            <div className="small-pic-container">
                                <div className="small-pic">
                                    < img className="small4" src={window.kitURL} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "spot-info-container">
                    <div className="spot-detail-container">
                        <div className="spot-detail-title">Name</div>
                        <div className="spot-detail-des">Description</div>
                        <div className="spot-detail-ame">Amenities</div>
                        <div className="spot-detail-sleep">Sleeping arrangements</div>
                        <div className="spot-detail-ava" >Availability</div>
                        <div className="review-star" >
                            <div className="spot-detail-review">200 REVIEWS</div>
                            
                            <div className="index-rating">
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                                <i id="star" className="fas fa-star"></i>
                            </div>
                            
                        </div>
                        <div className="spot-detail-reviews">Reviews</div>
                        <div><SpotMapContainer /></div>
                        <div className="spot-detail-pol">
                            Policies
                            <div className="rules">
                                House Rules
                                <ul>
                                    <li>No smoking, partities, or events</li>
                                    <li>Check-in is anytime after 2PM and check-out by 11AM</li>
                                </ul>
                            </div>
                            <div>
                                Cancellations
                                <ul>
                                    <li>Free cancellation for 48 hours</li>
                                    <li>After that, get a full refund, minus the service fee.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="booking-container">
                        Booking form here 
                    </div>
                </div>






            </div>
        )

    }


}

export default SpotShow;