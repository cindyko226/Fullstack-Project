import React from 'react';

class ReviewIndexitem extends React.Component {
    constructor(props){
        super(props);
        this.deleteReview = this.deleteReview.bind(this);
    }


    deleteReview(){
        this.props.deleteReview(this.props.review.id)
    }


    render(){
        // debugger
        // if (this.props.spot === undefined){
        //     return null;
        // }

        return(
            
            <div>
                <div>Rating: {this.props.review.rating}</div>
                <div>Review: {this.props.review.body}</div>
                <div>
                    <button onClick={this.deleteReview}>Delete</button>
                </div>

            </div>

        )

    }


}

export default ReviewIndexitem;