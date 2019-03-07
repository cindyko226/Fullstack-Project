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
            
            <div className="review-index-all">
                <div className="pic-rating">
                    <div className="review-index-pic">
                        < img className="user-img-review" src={this.props.review.authorPhotourl} />
                   </div>
                    <div className="review-index-rating">
                        <div className="review-author" >{this.props.review.author}</div>
                        <div>Rating: {this.props.review.rating}</div>
                    </div>

                </div>
                <div className="review-index-body" > {this.props.review.body}</div>
                <div>
                    <button onClick={this.deleteReview}>Delete</button>
                </div>

            </div>

        )

    }


}

export default ReviewIndexitem;