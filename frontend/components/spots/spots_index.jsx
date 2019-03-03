import React from 'react';
import {withRouter} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NavBarContainer from '../nav-bar/nav_bar_container';
import {Link} from 'react-router-dom';
import SpotMapContainer from '../map/spot_map_container';

class SpotsIndex extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render(){
        if (this.props.spots.length === 0 ){
            return null;
        }

        return(
        <div className="spots-index-page">
            <div >
              {/* <Link to="/" > <div className="spots-logo-png" ></div></Link>  */}
              <div >
              <NavBarContainer/>
              </div>
             </div> 

            <div className="filter"> 
                <p>Filter here</p>
            </div>

            <div className="index-page-container">
                <div className="main-container">
                    <div className="homes-column">
                        <p className="index-title">Where to stay</p>
                    </div>
                    {/* <p className="welcome">Start planning your trip, {this.props.currentUser.username}</p> */}
                    <div className="homes-column">

                        <h1 className="index-title">Homes in San Francisco</h1>
                        <div className="homes-lists">
                        <Link to={`/spots/${this.props.sf[0].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.brentURL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type">{this.props.spots[0].homeType} • {this.props.spots[0].beds} BED</div>
                                    <div className="index-spot-title">{this.props.spots[0].name}</div>
                                    <div className="index-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.intURL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type" >{this.props.spots[1].homeType} • {this.props.spots[1].beds} BED</div>
                                        <div className="index-spot-title">{this.props.spots[1].name}</div>
                                        <div className="index-rating" >
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="homes-column">
                        <h1 className="index-title">Homes in Los Angeles</h1>
                        <div className="homes-lists">
                            <div className="homes-des" >
                                <div className="home-pic">
                                    < img src={window.artURL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type">{this.props.spots[0].homeType} • {this.props.spots[0].beds} BED</div>
                                        <div className="index-spot-title" >{this.props.spots[0].name}</div>
                                        <div className="index-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                            <div className="homes-des">
                                <div className="home-pic">
                                < img src={window.kitURL} />
                                <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type">{this.props.spots[1].homeType} • {this.props.spots[1].beds} BED</div>
                                        <div className="index-spot-title" >{this.props.spots[1].name}</div>
                                        <div className="index-rating" >
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="homes-column">
                        <h1 className="index-title" >Homes in San Diego</h1>
                        <div className="homes-lists">
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.art1URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type" >{this.props.spots[0].homeType} • {this.props.spots[0].beds} BED</div>
                                        <div className="index-spot-title">  {this.props.spots[0].name}</div>
                                        <div className="index-rating" >
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.int2URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type" >{this.props.spots[1].homeType} • {this.props.spots[1].beds} BED</div>
                                        <div className="index-spot-title" >{this.props.spots[1].name}</div>
                                        <div className="index-rating" >
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="homes-column">
                        <h1 className="index-title" >Homes in San Jose</h1>
                        <div className="homes-lists">
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.int1URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type" >{this.props.spots[0].homeType} • {this.props.spots[0].beds} BED</div>
                                        <div className="index-spot-title">{this.props.spots[0].name}</div>
                                        <div className="index-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.int3URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                    <div className="index-spot-info">
                                        <div className="index-spot-type">{this.props.spots[1].homeType} • {this.props.spots[1].beds} BED</div>
                                        <div className="index-spot-title">{this.props.spots[1].name}</div>
                                        <div className="index-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="index-map-container">
                    <div className="map-zero"></div>
                    <div className="map-one"></div>
                    <div className="index-map">
                    <SpotMapContainer />

                    </div>
                </div>

            </div>

        </div>
           
        )
    }


}

export default withRouter(SpotsIndex);