
class MarkerManager{
    
    constructor(map, handleClick, single){
    
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
        this.single = single;
    }


    updateMarkers(spots){
        const spotsObj = {};
        spots.forEach( spot => spotsObj[spot.id] = spot);


        spots.filter(spot=> !this.markers[spot.id])
        .forEach( newSpot => this.createMarkerFromSpot(newSpot))

        Object.keys(this.markers)
        .filter(spotId => !spotsObj[spotId])
        .map((marker) => this.remmoveMarker(marker));

        // console.log('time to update');

    }

    createMarkerFromSpot(spot) {
        if (this.single === true) {
            this.markers[spot.id] = new google.maps.Marker({
                position: { lat: spot.lat, lng: spot.lng },
                icon: {
                    path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
                    fillColor: '#008489',
                    scale: 5,
                    fillOpacity: 0.3,
                    labelOrigin: new google.maps.Point(-1, -25),
                    strokeColor: '#008489',
                    strokeWeight: 1,
                },
                spotId: spot.id,
            });
            this.markers[spot.id].setMap(this.map);
        } else {
            this.markers[spot.id] = new google.maps.Marker({
                position: { lat: spot.lat, lng: spot.lng },
                label: {
                    text: `$${spot.rate}`,
                    fontWeight: 'bold',
                    fontSize: '14px',
                },
                icon: {
                    path: 'M22-48h-44v43h16l6 5 6-5h16z',
                    fillColor: 'white',
                    scale: 0.85,
                    fillOpacity: 1,
                    labelOrigin: new google.maps.Point(-1, -25),
                    strokeColor: 'gray',
                },
                spotId: spot.id,
            });

            this.markers[spot.id].addListener('click', () => this.handleClick(spot));

            this.markers[spot.id].setMap(this.map);
        }
        
        // const marker = new google.maps.Marker({
        //     position: {lat: spot.lat, lng: spot.lng},
        //     map: this.map,
        //     spotId: spot.id
        // });

        // marker.addListener('click', () => this.handleClick(spot));
        // this.markers[marker.spotId] = marker;

    }

    remmoveMarker(marker) {
        this.markers[marker.spotId].setMap(null);
        delete this.markers[marker.spotId];
    }



}


export default MarkerManager;
