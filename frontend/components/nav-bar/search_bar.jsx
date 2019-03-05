import React from 'react';
import {withRouter} from 'react-router-dom';
import SpotMap from '../map/spot_map';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        // debugger
        this.state = { address: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
   


    componentDidMount(){
        
        let input = document.getElementById('search-bar');
        
        let autocomplete = new google.maps.places.Autocomplete(input);
        let address;

        autocomplete.addListener('place_changed', () => {
            if (!autocomplete.getPlace().formatted_address) {
                // use input if cannot convert to formatted address
                address = autocomplete.getPlace().name;
                this.setState({ address: address }, this.handleSubmit );
                // this.handleSubmit();
            } else {
                // use formatted address if available
                address = autocomplete.getPlace().formatted_address;
                this.setState({ address: address }, this.handleSubmit );
                // this.handleSubmit();
            }
        });

    }
    // componentDidUpdate(){
    //     this.handleSubmit();
    // }

    handleSubmit() {
        let lat;
        let lng;
        let coordinates = new google.maps.Geocoder()
        console.log(this.props);
        coordinates.geocode({ 'address': this.state.address }, (results, status) => {
            if (status === 'OK') {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                this.props.history.push(`/search?lat=${lat}&lng=${lng}`);
                // console.log(this.props);
                this.props.receiveSearch({lat, lng});
            } else {
                lat = 37.773972;
                lng = -122.431297;
                this.props.history.push(`/search?lat=${lat}&lng=${lng}`);
                // console.log(this.props);
                this.props.receiveSearch({ lat, lng });
            }
        })
    }


    handleChange(e) {
        this.setState({ address: e.target.value });
    }


    render() {
        
        const places = ['San Francisco', 'Los Angeles', 'San Diego', 'San Jose'];

        return(
            
            <div className="index-page-search">
               
                <div className="index-search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input id="search-bar" className="index-search-input" type="text" 
                    onChange={this.handleChange} 
                    placeholder={`Try  \"${places[Math.floor(Math.random() * places.length)]}\"`}  />
                </div>
               
            </div>
        )
    }



}

export default withRouter(SearchBar);