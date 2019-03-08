import React from 'react';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({ spot }) => {




return(

   
        <div className="homes-lists">
           
           
            <Link to={`/spots/${spot.id}`} >
                <div className="homes-des">
                    <div className="home-pic">

                        < img src={spot.photoUrls[0]} />

                        <i className="far fa-heart"></i>
                    </div>
                    <div className="index-spot-info">
                        {/* <p>{spot.city}</p> */}
                        <div className="index-spot-type">{spot.homeType} • {spot.beds} BED</div>
                        <div className="index-spot-title">{spot.name}</div>
                        <div className="index-spot-rate">From ${spot.rate} per night</div>
                        <div className="index-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </Link>
           
        
        </div>
    


)


}

export default SpotIndexItem;