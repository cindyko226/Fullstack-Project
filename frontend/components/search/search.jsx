import React from 'react';
import SpotsIndexContainer from '../spots/spots_index_container';
import SpotMapContainer from '../map/spot_map_container';
import NavBarContainer from '../nav-bar/nav_bar_container';
// import FilterForm from './filter_form';
// import FilterFormTest from './filter_form_test';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.loadSpots = this.loadSpots.bind(this);
    }


    loadSpots(){
            return (
                <div>
                    <SpotsIndexContainer
                        spots={this.props.spots}
                        logout={this.props.logout}
                        fetchSpots={this.props.fetchSpots}
                        updateFilter={this.props.updateFilter}
                        bounds = {this.props.bounds}
                    />
                </div>
            )
        }
        
        render(){
            return(
                <div>
                
                    <div>
                        {this.loadSpots()}
                    </div>

            </div>
        )
    }

}

export default Search;