import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

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
        console.log(props);
        // debugger
    }

    componentDidMount() {
        // if (this.props.spots.length === 0) {
        //     return null;
        // }
        // debugger
        const mapOptions = {
            center: { lat: 37.7258, lng: -122.405 }, // this is SF
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        // debugger
        this.MarkerManager.updateMarkers(this.props.spots);
        
        // wrap this.mapNode in a Google Map
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
        
        // const map = this.refs.map;
        // this.map = new google.maps.Map(map, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this))
        
        // if(!true){
        //     this.props.fetchSpot(this.props.spotId)
        // }else {
        //     this.registerListeners();
        //     this.MarkerManager.updateMarkers(this.props.spots);
        // }

    }


    // componentDidUpdate(){
    //     if(!ture){
    //         const targetSpotKey = Object.keys(this.props.spots)[0];
    //         const targetSpot = this.props.spots[targetSpotKey];
    //         this.MarkerManager.updateMarkers([targetSpot]); //grabs only that one bench
    //     }else {
    //         this.MarkerManager.updateMarkers(this.props.spots)
    //     }
    // }

    // registerListeners(){
    //     google.maps.event.addListener(this.map, 'idle', ()=> {
    //         const { north, south, east, west } = this.map.getBounds().toJSON();
    //         const bounds = {
    //             northEase: {lat: north, lng: east},
    //             southWest: { lat: south, lng: west} };
    //             this.props.updateMarkers('bounds', bounds); 
    //     });
    //     google.maps.event.addLiatener(this.map, 'click', (event) => {
    //         const coords = getCoordsObj(event.latLng);
    //         this.handleClick(coords);
    //     });
    //  }
    
    //  handleMarkerClick(spot) {
    //      this.props.history.push(`api/spots/${spot.id}`);
    //  }

    // handleClick(coords) {
    //     this.props.history.push({
    //         pathname: 'api/spots/',
    //         searth: `lat=${coords.lat}&lng=${coords.lng}`
    //     });
    // }

    render() {
        return(

            <div className="map" ref={map => this.mapNode = map}>
                Map
            </div>
        )
    }

}

export default SpotMap;