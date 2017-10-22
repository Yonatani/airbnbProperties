import React from 'react';
import PropTypes from 'prop-types';
import './reviewList.scss';

const ReviewView = ({ review }) => (
  <div className="reviewContainer" >
    <div className="reviewHeader">
      <img src={review.authorImage} className="authorImage"/>
      <p className="authorName">{review.authorName}</p>
    </div>
    <p className="address" title={review.text}>{review.text}</p>
    <div className="reviewDivider"/>
  </div>
);

ReviewView.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewView;
