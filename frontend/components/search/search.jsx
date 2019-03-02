import React from 'react';
import SpotsIndex from '../spots/spots_index';
import SpotMap from '../map/spot_map';


const Search = ({ spots, logout, fetchSpots}) => {
    console.log(spots);
    return(
    <div>
        <SpotsIndex 
          spots={spots}
          logout={logout}
          fetchSpots={fetchSpots}
        />
        <div className="hidden-map" >
          <SpotMap  spots={spots}/>
        </div>
    </div>
    )
};



export default Search;