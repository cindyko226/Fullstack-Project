import React from 'react';
import SpotsIndex from '../spots/spots_index';
import SpotMap from '../map/spot_map';


const Search = ({ spots, logout, fetchSpots}) => (
    <div>
        <SpotsIndex 
          spots={spots}
          logout={logout}
          fetchSpots={fetchSpots}
        />
        <SpotMap  spots={spots}/>
    </div>
);



export default Search;