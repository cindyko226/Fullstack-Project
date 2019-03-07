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

        let star;
        if (this.props.review.rating === 1){
            star = (
                <div className="review-index-star">
                    <i id="star" className="fas fa-star"></i> 
                </div>
            )
        }
        
        if (this.props.review.rating === 2){
            star =(
                <div >
                    <i id="review-index-star" className="fas fa-star"></i>
                    <i id="review-index-star" className="fas fa-star"></i> 
                </div>
            )
        }

        if (this.props.review.rating === 3) {
            star = (
                <div >
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                </div>
            )
        }
    
        if (this.props.review.rating === 4) {
            star = (
                <div>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                </div>
            )
        }


        if (this.props.review.rating === 5) {
            star = (
                <div>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                    <i id="review-index-star"className="fas fa-star"></i>
                </div>
            )
        }





        return(
            
            <div className="review-index-all">
                <div className="pic-rating">
                    <div className="review-index-pic">
                        < img className="user-img-review" src={this.props.review.authorPhotourl} />
                   </div>
                    <div className="review-index-rating">
                        <div className="review-author" >{this.props.review.author}</div>
                        <div>{star}</div>
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