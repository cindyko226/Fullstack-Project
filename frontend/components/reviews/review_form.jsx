import React from 'react';


class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            body: "",
            spot_id: this.props.spotId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);

    }

    handleChange(e){
        this.setState({ 
            body: e.target.value
         })
    }

    handleRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        if (!this.props.currentUser) {
            this.props.openModal('login')
        } else {
            this.props.createReview({
                rating: this.state.rating,
                body: this.state.body,
                spot_id: this.state.spot_id,
            }).then(() => this.props.history.replace(`/spots/${this.props.spotId}`));
        }

    }


    render(){
        // let checked = "checked";
        let starred = [];

        for (let i = 0; i <= this.state.rating; i++) {
            starred.push("higlighted");
        }
       

        return(
            <div className='review-form-container-all'>

                    <div>
                        <div className="review-form-title">Leave a Review</div>

                    </div>

                  <div className="review-form-container">

                            <div className="stars-div">
                                <i className={`fa fa-star ${starred[1]}`}></i>
                                <i className={`fa fa-star ${starred[2]}`}></i>
                                <i className={`fa fa-star ${starred[3]}`}></i>
                                <i className={`fa fa-star ${starred[4]}`}></i>
                                <i className={`fa fa-star ${starred[5]}`}></i>
                            </div>
                    </div>
                    

                <form className="review-form-detail-container" onSubmit={this.handleSubmit}>
                    <div className="star-rating">
                        <input className="radio-input" onChange={this.handleRating} type="radio" name="star" value="1"></input>
                        <input className="radio-input"  onChange={this.handleRating} type="radio" name="star" value="2"></input>
                        <input className="radio-input"  onChange={this.handleRating} type="radio" name="star" value="3"></input>
                        <input className="radio-input"  onChange={this.handleRating} type="radio" name="star" value="4"></input>
                        <input className="radio-input" onChange={this.handleRating} type="radio" name="star" value="5"></input>
                    </div> 

                    <div>
                        <textarea className="review-body" onChange={this.handleChange} ></textarea>
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>

                    
                
                </form>
            </div>
        )
    }

}

export default ReviewForm;