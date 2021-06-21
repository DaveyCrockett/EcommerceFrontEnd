import React from 'react';

const ReviewDetail = ({review}) => {
    return (
        <tr className = 'review-item'>
            <td><h3>Anonymous user says:</h3></td><br></br>
            <td><h3>{review.comment}</h3></td>
        </tr>
    )
}

export default ReviewDetail;