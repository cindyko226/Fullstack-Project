import React from 'react';
import SpotsIndexContainer from '../spots/spots_index_container';
import SpotMapContainer from '../map/spot_map_container';


const Search = ({ spots, logout, fetchSpots}) => {
    // console.log(spots);
    // debugger
    return(
    <div>
        <SpotsIndexContainer
          spots={spots}
          logout={logout}
          fetchSpots={fetchSpots}
        />
        
    </div>
    )
};



export default Search;