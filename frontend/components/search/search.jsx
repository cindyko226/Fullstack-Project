import React from 'react';
import SpotsIndexContainer from '../spots/spots_index_container';
import SpotMapContainer from '../map/spot_map_container';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.loadSpots = this.loadSpots.bind(this);
    }


    loadSpots(){
        // debugger
        // if(this.props.spots.length === 0 && this.props.bounds.length > 1){
        //     return(
        //         <div>NO RESULT!</div>
        //     )
        // }else {
            return (
                <div>

                    <SpotsIndexContainer
                        spots={this.props.spots}
                        logout={this.props.logout}
                        fetchSpots={this.props.fetchSpots}
                        updateFilter={this.props.updateFilter}
                    />
                </div>
            )
        // }
    }

    render(){
        return(
            <div>
                {this.loadSpots()}
            </div>
        )
    }

}

// const Search = ({ spots, logout, fetchSpots, updateFilter}) => {
//     // console.log(spots);
//     // debugger
//     return(
//     <div>
//         <SpotsIndexContainer
//           spots={spots}
//           logout={logout}
//           fetchSpots={fetchSpots}
//           updateFilter = {updateFilter}
//         />
        
//     </div>
//     )
// };



export default Search;