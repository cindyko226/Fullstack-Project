import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';

// import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {


    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }




    render() {
        return(

            <div className="map" ref={map => this.mapNode = map}>
                Map
            </div>
        )
    }

}

export default SpotMap;