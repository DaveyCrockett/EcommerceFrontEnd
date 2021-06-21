import React, { Component } from 'react';
import axios from 'axios';
import ReviewDetail from './ReviewDetail';


const Reviews = ({reviews, seeReviews}) => {
    let renderedReviews = reviews.map((review) => {
        return(
            <ReviewDetail key={review.id} review={review} />
            )});
            if(seeReviews === 'off')
            return (null)
            return (
            <table className='review-table'>{renderedReviews}</table>
            )
        }
export default Reviews;