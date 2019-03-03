import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ShowMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.spot.lat, lng: this.props.spot.lng },
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, null, true);
        this.MarkerManager.updateMarkers([this.props.spot]);
    }

    render() {
        return (
            <div className="map" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default ShowMap;