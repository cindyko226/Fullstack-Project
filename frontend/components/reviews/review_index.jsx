import React from 'react';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchReviews();
    }

    render(){
        let reviewItems = this.props.reviews.map( review => {
            return(
                <li className="no-style" key={review.id}>
                        <ReviewIndexItem 
                            review = {review}
                            currentUser={this.props.currentUser}
                            deleteReview={this.props.deleteReview}
                        />
                </li>
            )
        })
        return(
            <div>
               
                {reviewItems}
            </div>

        )
    }

}

export default ReviewIndex;