
class MarkerManager{
    constructor(map, handleClick){
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }


    updateMarkers(spots){
        const spotsObj = {};
        spots.forEach( spot => spotsObj[spot.id] = spot);


        spots.filter(spot=> !this.markers[spot.id])
        .forEach( newSpot => this.createMarkerFromSpot(newSpot))

        // Object.keys(this.markers)
        // .filter(spotId => !spotsObj[spotId])
        // .forEach((spotId) => this.remmoveMarker(this.markers[spotId]))

        console.log('time to update');

    }

    createMarkerFromSpot(spot) {
        
        const marker = new google.maps.Marker({
            position: {lat: spot.lat, lng: spot.lng},
            map: this.map,
            spotId: spot.id
        });

        marker.addListener('click', () => this.handleClick(spot));
        this.markers[marker.spotId] = marker;

    }

    // remmoveMarker(marker) {
    //     this.markers[marker.spotId].setMap(null);
    //     delete this.markers[marker.spotId];
    // }



}


export default MarkerManager;
