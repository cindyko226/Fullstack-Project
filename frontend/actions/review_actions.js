import * as reviewApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERROR';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_REVIEW_ERRORS,
})

export const fetchReviews = () => dispatch => {
    return reviewApiUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = (review) => dispatch => {
    return reviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const updateReview = (review) => dispatch => {
    return reviewApiUtil.updateReview(review)
    .then(review => dispatch(updateReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const deleteReview = (id) => dispatch => {
    return reviewApiUtil.deleteReview(id)
    .then( id => dispatch(removeReview(id)))
}