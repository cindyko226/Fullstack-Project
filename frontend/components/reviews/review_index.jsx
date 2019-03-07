import React from 'react';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchReviews();
        // this.props.fetchSpots();
    }

    render(){
        let reviewItems = this.props.reviews.map( review => {
            // debugger
            return(
                <li key={review.id}>

                        <ReviewIndexItem 
                            review = {review}
                            
                            deleteReview={this.props.deleteReview}
                        />
                </li>
            )
        })
        // debugger 
        return(
            <div>
                Reviews 
                {reviewItems}
            </div>

        )
    }

}

export default ReviewIndex;