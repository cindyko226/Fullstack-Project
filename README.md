# Take Me Home 

Live Demo(https://take--me--home.herokuapp.com/#/)


Take Me Home, an AirBnB clone, is a platform that allow user to look for local homes for rentals or to rent out spots at specific dates.


## Technologies

### Backend

* Postgresql
* Ruby on Rails

### Frontend

* React
* Redux

### APIs/Packages

* Google Maps API
* Google Places API
* Google Geocoding API
* React Dates
* React Slider 


## Features 

* Full user authentication and security.
* Users can search for spots in any location with the Google Maps API.
* Users can filter spots through filter function by spot rate.
* Users are able to book the spot, and update, cancel their bookings.


## Searching For Spots

![Searching](https://github.com/cindyko226/Fullstack-Project/blob/master/ReadMe/chrome-capture.gif)

Searching for places was the most challenging and most rewarding feature. It involved the Google Places API which took care of the autofill as well as the Google Geocoding API which captured the latitude and longitude data. The NorthEast and SouthWest coordinates of the map were used to filter spotss that are within the bounds.

```js
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
```


## Filtering For Spots

![filter](https://github.com/cindyko226/Fullstack-Project/blob/master/ReadMe/chrome-capture%20(1).gif)

User can search spots by moving rate range bar, filtering for spots by rate will update search results and only show the spots within the price range.

```js
    <div >
        <Range
            min={1}
            max={600}
            value={[minPrice, maxPrice]}
            defaultValue={[minPrice, maxPrice]}
            onChange={this.updatePrice}
            onAfterChange={() => this.handleApply([minPrice, maxPrice])}
            allowCross={false}
        />
    </div>
```

## Spots Show Page 

![spotshow](https://github.com/cindyko226/Fullstack-Project/blob/master/ReadMe/chrome-capture%20(2).gif)

Clicking on a spot will take you to the spot show page, where all relevant information of the spot is shown. Implement React Dates to create an interactive calendar that displays the dates of the spot and allows the user to book it as well. 


## Possible Future Features

* User profile where user can upload their picture and edit content.
* More filter choices.




