import React from 'react';
import {withRouter} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NavBarContainer from '../nav-bar/nav_bar_container';
import {Link} from 'react-router-dom';
import SpotMapContainer from '../map/spot_map_container';
import FilterForm from '../search/filter_form';
import SpotIndexItem from './spot_index_item';

class SpotsIndex extends React.Component{

    constructor(props){
        super(props);
        
        this.noResult = this.noResult.bind(this);
    }

   
    componentDidMount() {
        window.scrollTo(0, 0);
    }

   
    noResult(){
        if (this.props.spots.length === 0 && this.props.bounds.length > 1){
            return(
                
                <div className="homes-column">
                    <div className="loader"></div>
                    <div className="no-result">NO RESULT! </div>
                </div>
            )
        }
 
     }  


    render(){
        
        const sf = this.props.sf.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
        const la = this.props.la.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
        const sd = this.props.sd.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
        const sj = this.props.sj.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
        
        let sfTitle;
        if (this.props.sf.length > 0) {
            sfTitle = "Homes in San Francisco"
        }

        let laTitle;
        if(this.props.la.length > 0 ){
            laTitle = "Homes in Los Angeles"
        }

        let sdTitle;
        if(this.props.sd.length > 0){
            sdTitle = "Homes in San Diego"
        }

        let sjTitle;
        if(this.props.sj.length > 0){
            sjTitle = "Homes in San Jose"
        }


        return(
        <div className="spots-index-page">
            
            <div >
                <NavBarContainer/>
            </div>
             

            <div className="filter"> 
                <FilterForm resetFilters={this.props.resetFilters} openModal={this.props.openModal}/> 
            </div>

            <div className="index-page-container">
                <div className="main-container">
                    <div className="homes-column">
                        <p className="index-title">Where to stay</p>
                    </div>
                        <div className="homes-column">
                            <h1 className="index-title" >{sfTitle}</h1>
                            <div className="homes-list-add">
                                {sf}
                            </div>
                        </div>

                        <div className="homes-column">
                            <h1 className="index-title" >{laTitle}</h1>
                            <div className="homes-list-add">
                                {la}
                            </div>
                        </div>

                        <div className="homes-column">
                            <h1 className="index-title" >{sdTitle}</h1>
                            <div className="homes-list-add">
                                {sd}
                            </div>
                        </div>

                        <div className="homes-column">
                            <h1 className="index-title" >{sjTitle}</h1>
                            <div className="homes-list-add">
                                {sj}
                            </div>
                        </div>

                        {this.noResult()}
                    
                    
                </div>

                <div className="index-map-container">
                    <div className="map-zero"></div>
                    <div className="map-one"></div>
                    <div className="index-map">
                    <SpotMapContainer 
                    spots={this.props.spots}
                    updateFilter ={this.props.updateFilter} />

                    </div>
                </div>

            </div>
        </div>
        
        )
    }


}

export default withRouter(SpotsIndex);