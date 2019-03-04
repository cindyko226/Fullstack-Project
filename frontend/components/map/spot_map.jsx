import React from 'react';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import queryString from 'query-string';

// const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });


// const mapOptions = {
//     center: {
//         lat: 37.773972,
//         lng: -122.431297 
//     },
//     zoom: 13
// };

class SpotMap extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
        // debugger
        this.resetMap = this.resetMap.bind(this);
        this.registerListeners = this.registerListeners.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    componentDidMount() {
        this.resetMap();

    }

    resetMap(){
        
        let coordinates;
        if (this.props.location.search) {
            coordinates = queryString.parse(this.props.location, search);
        } else {
            coordinates = { lat: '37.773972', lng: '-122.431297' };
        }
        
        const mapOptions = {
            center: {
                lat: parseFloat(coordinates.lat),
                lng: parseFloat(coordinates.lng)
            },
            zoom: 13
        };
        
        // debugger
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // debugger
        this.registerListeners();
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
        // debugger
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    componentDidUpdate(prevProps){
        // if(!ture){
        //     const targetSpotKey = Object.keys(this.props.spots)[0];
        //     const targetSpot = this.props.spots[targetSpotKey];
        //     this.MarkerManager.updateMarkers([targetSpot]); 
        // }else {
        //     this.MarkerManager.updateMarkers(this.props.spots)
        // }
        this.MarkerManager.updateMarkers(this.props.spots)
        if(this.props.location.search != prevProps.location.search){
            this.resetMap();
        }
    }

    componentWillUnmount(){
        google.maps.event.clearListeners(this.map, 'idle');
    }

    registerListeners(){
        google.maps.event.addListener(this.map, 'idle', ()=> {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEase: {lat: north, lng: east},
                southWest: { lat: south, lng: west} };
            this.props.updateFilter('bounds', bounds); 
        });
       
     }
    
     handleMarkerClick(spot) {
         this.props.history.push(`spots/${spot.id}`);
     }

    // handleClick(coords) {
    //     this.props.history.push({
    //         pathname: 'api/spots/',
    //         searth: `lat=${coords.lat}&lng=${coords.lng}`
    //     });
    // }

    render() {
        return(

            <div className="map" ref={map => this.mapNode = map}>
                
            </div>
        )
    }

}

export default withRouter(SpotMap);