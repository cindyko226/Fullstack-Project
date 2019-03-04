import React from 'react';
import { withRouter } from 'react-router-dom';


class SearchBar extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        
        this.state = { address: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    
    componentDidMount() {

        let input = document.getElementById('search-bar');

        let autocomplete = new google.maps.places.Autocomplete(input);
        let address;

        autocomplete.addListener('place_changed', () => {
            if (!autocomplete.getPlace().formatted_address) {
                // use input if cannot convert to formatted address
                address = autocomplete.getPlace().name;
                this.setState({ address: address });
                this.handleSubmit();
            } else {
                // use formatted address if available
                address = autocomplete.getPlace().formatted_address;
                this.setState({ address: address });
                this.handleSubmit();
            }
        });

    }

    handleSubmit() {
        let lat;
        let lng;
        let coordinates = new google.maps.Geocoder();
        coordinates.geocode({ 'address': this.state.address }, (results, status) => {
            if (status === 'OK') {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                this.props.history.push(`/search?lat=${lat}&lng=${lng}`);
            } else {
                lat = 37.773972;
                lng = -122.431297;
                this.props.history.push(`/search?lat=${lat}&lng=${lng}`);
            }
        });
    }

    handleChange(e) {
        this.setState({ address: e.target.value });
    }


    render() {

        const places = ['San Francisco', 'Los Angeles', 'San Diego', 'San Jose'];

        return (
            <div className="home-icon">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input id="search-bar" className="search-input" type="text"
                 onChange={this.handleChange} 
                placeholder={`Try  \"${places[Math.floor(Math.random() * places.length)]}\"`}  />
            </div>
        )
    }



}

export default withRouter(SearchBar);