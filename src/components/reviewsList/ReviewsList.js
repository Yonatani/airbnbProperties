import React from 'react';
import PropTypes from 'prop-types';
import './reviewList.scss';
import ReviewView from "./ReviewView";

const ReviewsList = ({ reviews }) => (

    <div id="reviewsListContainer">
      {reviews.map((review) => (
          <ReviewView key={review.id} review={review}/>
        ))}
    </div>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
