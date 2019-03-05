import React from 'react';
import {withRouter} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NavBarContainer from '../nav-bar/nav_bar_container';
import {Link} from 'react-router-dom';
import SpotMapContainer from '../map/spot_map_container';

class SpotsIndex extends React.Component{

    constructor(props){
        super(props);
        this.loadSf = this.loadSf.bind(this);
        this.loadLa = this.loadLa.bind(this);
        this.loadSd = this.loadSd.bind(this);
        this.loadSj = this.loadSj.bind(this);
        this.noResult = this.noResult.bind(this);
    }

    // componentDidMount(){
    //     // debugger
    //     this.props.fetchSpots(this.props.filters);
    // }

    loadSf(){
        // debugger
        if(this.props.sf.length > 0){
            return (
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
                                    <div className="index-spot-type">{this.props.sf[0].homeType} • {this.props.sf[0].beds} BED</div>
                                    <div className="index-spot-title">{this.props.sf[0].name}</div>
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
                        
                        <Link to={`/spots/${this.props.sf[1].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.intURL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type" >{this.props.sf[1].homeType} • {this.props.sf[1].beds} BED</div>
                                    <div className="index-spot-title">{this.props.sf[1].name}</div>
                                    <div className="index-rating" >
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            )
        }
    }
   
    loadLa(){
        if(this.props.la.length > 0){
            return(
                <div className="homes-column">
                    <h1 className="index-title">Homes in Los Angeles</h1>
                    <div className="homes-lists">
                        <Link to={`/spots/${this.props.la[0].id}`} >
                            <div className="homes-des" >
                                <div className="home-pic">
                                    < img src={window.artURL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type">{this.props.la[0].homeType} • {this.props.la[0].beds} BED</div>
                                    <div className="index-spot-title" >{this.props.la[0].name}</div>
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
                        <Link to={`/spots/${this.props.la[1].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.kitURL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type">{this.props.la[1].homeType} • {this.props.la[1].beds} BED</div>
                                    <div className="index-spot-title" >{this.props.la[1].name}</div>
                                    <div className="index-rating" >
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
    }

    loadSd(){
        if(this.props.sd.length > 0){
            return(
                <div className="homes-column">
                    <h1 className="index-title" >Homes in San Diego</h1>
                    <div className="homes-lists">
                        <Link to={`/spots/${this.props.sd[0].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.art1URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type" >{this.props.sd[0].homeType} • {this.props.sd[0].beds} BED</div>
                                    <div className="index-spot-title">  {this.props.sd[0].name}</div>
                                    <div className="index-rating" >
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/spots/${this.props.sd[1].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.int2URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type" >{this.props.sd[1].homeType} • {this.props.sd[1].beds} BED</div>
                                    <div className="index-spot-title" >{this.props.sd[1].name}</div>
                                    <div className="index-rating" >
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
    }

    loadSj(){
        if(this.props.sj.length > 0){
            return(
                <div className="homes-column">
                    <h1 className="index-title" >Homes in San Jose</h1>
                    <div className="homes-lists">
                        <Link to={`/spots/${this.props.sj[0].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.int2URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type" >{this.props.sj[0].homeType} • {this.props.sj[0].beds} BED</div>
                                    <div className="index-spot-title">{this.props.sj[0].name}</div>
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
                        <Link to={`/spots/${this.props.sj[1].id}`} >
                            <div className="homes-des">
                                <div className="home-pic">
                                    < img src={window.int3URL} />
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="index-spot-info">
                                    <div className="index-spot-type">{this.props.sj[1].homeType} • {this.props.sj[1].beds} BED</div>
                                    <div className="index-spot-title">{this.props.sj[1].name}</div>
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
                    </div>
                </div>
                
            )
        }
    }

    noResult(){
        // debugger
        if (this.props.spots.length === 0 && this.props.bounds.length > 1){
            return(
                <div className="homes-column">
                   
                        <div className="no-result">NO RESULT! </div>
                    
                </div>
            )
        }
 
     }  


    render(){
        // if (this.props.spots.length === 0 ){
        //     return null;
        // }

        return(
        <div className="spots-index-page">
            
            <div >
                <NavBarContainer/>
            </div>
             

            <div className="filter"> 
                <p>Filter here</p>
            </div>

            <div className="index-page-container">
                <div className="main-container">
                    <div className="homes-column">
                        <p className="index-title">Where to stay</p>
                    </div>
                   
                        {this.noResult()}
                        {this.loadSf()}
                        {this.loadLa()}
                        {this.loadSd()}
                        {this.loadSj()}
                    
                    
                </div>

                <div className="index-map-container">
                    <div className="map-zero"></div>
                    <div className="map-one"></div>
                    <div className="index-map">
                    <SpotMapContainer 
                    spots={this.props.spots}
                    updateFilter ={this.props.updateFilter} />

                    </div>
                </div>

            </div>
        </div>
        
        )
    }


}

export default withRouter(SpotsIndex);