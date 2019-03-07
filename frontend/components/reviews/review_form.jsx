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

       

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="booking-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <input type="text" onChange={this.handleRating}/>
{/* 
                    <div className="star-rating">
                        <input onChange={this.handleRating} type="radio" name="star" value="1"></input>
                        <input onChange={this.handleRating} type="radio" name="star" value="2"></input>
                        <input onChange={this.handleRating} type="radio" name="star" value="3"></input>
                        <input onChange={this.handleRating} type="radio" name="star" value="4"></input>
                        <input onChange={this.handleRating} type="radio" name="star" value="5"></input>
                    </div> */}

                    <div>
                        <textarea className="review-body" cols="30" rows="10" onChange={this.handleChange} ></textarea>
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