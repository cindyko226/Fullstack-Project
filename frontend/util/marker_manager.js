export default class MarkerManager{
    constructor(map, handleClick){
        this.map = map;
        // this.handleClick = handleClick;
        this.markers = {};
    }


    updateMarkers(spots){
        // const spotsObj = {};
        // spots.forEach( spot => spotsObj[spot.id] = spot);

        // let filterSpot = spots.filter(spot => !this.markers[spot.id]);
        // filterSpot.forEach(newSpot => this.createMarkerFromSpot(newSpot))

        // spots.filter(spot=> !this.markers[spot.id])
        // .forEach( newSpot => this.createMarkerFromSpot(newSpot))

        // Object.keys(this.markers)
        // .filter(spotId => !spotsObj[spotId])
        // .forEach((spotId) => this.remmoveMarker(this.markers[spotId]))

        console.log('time to update');

    }

    // createMarkerFromSpot(spot) {
    //     const position = new google.map.LatLng(spot.lat, spot.lng)
    //     const marker = new google.maps.marker({
    //         position,
    //         map: this.map,
    //         spotId: spot.id
    //     });

    //     marker.addListener('click', () => this.handleClick(spot));
    //     this.markers[marker.spotId] = marker;

    // }

    // remmoveMarker(marker) {
    //     this.markers[marker.spotId].setMap(null);
    //     delete this.markers[marker.spotId];
    // }



}

