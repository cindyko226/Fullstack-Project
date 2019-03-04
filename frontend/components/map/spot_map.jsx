import React from 'react';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import queryString from 'query-string';





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
        // debugger
        let coordinates;
        if (this.props.location.search) {
            // debugger
            coordinates = queryString.parse(this.props.location.search);
            // debugger
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
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
        // debugger
        this.MarkerManager.updateMarkers(this.props.spots);
        this.registerListeners();
    }

    componentDidUpdate(prevProps){
       
        // debugger
        if(this.props.location.search !== prevProps.location.search){
            // debugger
            this.resetMap();
        }
        // debugger
        this.MarkerManager.updateMarkers(this.props.spots);
    }


    componentWillUnmount(){
        google.maps.event.clearListeners(this.map, 'idle');
    }

    registerListeners(){
        this.map.addListener('idle', () => {
            let { north, south, east, west } = this.map.getBounds().toJSON();
            let bounds = {
                ne: { lat: north, lng: east },
                sw: { lat: south, lng: west }
            }
            this.props.updateFilter('bounds', bounds)
        })
       
     }
    
     handleMarkerClick(spot) {
         this.props.history.push(`spots/${spot.id}`);
     }

    

    render() {
        return(

            <div className="map" ref={map => this.mapNode = map}>
                
            </div>
        )
    }

}

export default withRouter(SpotMap);